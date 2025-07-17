import { prisma } from 'config/client'
import { hashPassWord } from 'services/user.service'
import { ACCOUNT_TYPE } from 'config/constant'

const initDatabase = async () => {
    const constUser = await prisma.user.count()
    const constRole = await prisma.role.count()
    if (constRole === 0) {
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
    else if (constUser === 0) {
        const defaultPassword = await hashPassWord("123123")
        const adminRole = await prisma.role.findFirst({
            where: { name: "ADMIN" }
        })
        if (adminRole)
            await prisma.user.createMany({
                data: [{
                    fullname: "quangbabop",
                    username: "quang@gmail.com",
                    password: defaultPassword,
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    roleId: adminRole.id
                },
                {
                    fullname: "admin",
                    username: "admin@gmail.com",
                    password: defaultPassword,
                    accountType: ACCOUNT_TYPE.SYSTEM,
                    roleId: adminRole.id

                }
                ]
            })
    }
    else {
        console.log(">>>already init data...")
    }

}

export default initDatabase;
