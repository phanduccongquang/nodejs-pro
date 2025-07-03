import { prisma } from 'config/client'

const initDatabase = async () => {
    const constUser = await prisma.user.count()
    const constRole = await prisma.role.count()
    if (constUser === 0) {
        await prisma.user.createMany({
            data: [{
                username: "quang@gmail.com",
                password: "123123",
                accountType: "SYSTEM"
            },
            {
                username: "admin@gmail.com",
                password: "123123",
                accountType: "SYSTEM"
            }
            ]
        })
    } else if (constRole === 0) {
        await prisma.role.createMany({
            data: [{
                name: "ADMIN",
                description: "admin thi full quyền"
            },
            {
                name: "USER",
                description: "User thông thường"
            }
            ]
        })
    }
    else {
        console.log(">>>already init data...")
    }

}

export default initDatabase;
