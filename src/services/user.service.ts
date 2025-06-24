
import { prisma } from 'config/client'
const handleCreateUser = async (
    fullname: string,
    email: string,
    address: string
) => {
    const a = await prisma.user.create({
        data: {
            fullname: fullname,
            username: email,
            address: address,
            password: "",
            accountType: ""
        }
    })
    return a;
}
const getAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}
const handleDeleteUser = async (id: string) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: +id
        }
    })
    return deleteUser;
}
const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id: +id }
    })
    return user;
}
const updateUserById = async (id: string, fullname: string, email: string, address: string) => {
    const updateUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            fullname: fullname,
            username: email,
            address: address,
            password: "",
            accountType: ""
        },
    })
    return updateUser;
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }