import { prisma } from 'config/client'

const initDatabase = async () => {
    const constUser = await prisma.user.count()
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
    } else {
        console.log(">>>already init data...")
    }

}

export default initDatabase;
