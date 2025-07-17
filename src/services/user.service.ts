
import { prisma } from 'config/client'
import { ACCOUNT_TYPE } from 'config/constant';
import bcrypt from 'bcrypt';
const saltRounds = 10;
const hashPassWord = async (plainText: string) => {
    return await bcrypt.hash(plainText, saltRounds)
}
const handleCreateUser = async (
    fullname: string,
    email: string,
    address: string,
    phone: string,
    avatar: string,
    role: string
) => {
    const defaultPassword = await hashPassWord("123123")

    const a = await prisma.user.create({
        data: {
            fullname: fullname,
            username: email,
            address: address,
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            phone: phone,
            avatar: avatar,
            roleId: +role
        }
    })
    return a;
}
const getAllUser = async () => {
    const users = await prisma.user.findMany();
    return users;
}
const getAllRole = async () => {
    const roles = await prisma.role.findMany();
    return roles;
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

const updateUserById = async (id: string, fullname: string,
    role: string, phone: string,
    avatar: string, address: string) => {
    const updateUser = await prisma.user.update({
        where: {
            id: +id,
        },
        data: {
            fullname: fullname,
            phone: phone,
            address: address,
            roleId: +role,
            ...(avatar !== undefined && { avatar: avatar })
        },
    })
    return updateUser;
}

export {
    handleCreateUser, getAllUser, handleDeleteUser, getUserById,
    updateUserById, getAllRole, hashPassWord
}