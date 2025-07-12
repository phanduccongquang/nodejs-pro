
import { prisma } from "config/client";
import getConnections from "config/database";
const handleCreateUser = async (
    fullname: string,
    email: string,
    address: string
) => {

    const user = await prisma.user.create({
        data: {
            name: fullname,
            email: email,
            address: address
        },
    })
    return user;
}
const getAllUser = async () => {
    const user = await prisma.user.findMany()
    return user;

}
const handleDeleteUser = async (id: string) => {
    try {
        const connection = await getConnections();
        const sql = 'DELETE FROM `users` WHERE `id` = ? ';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        return [];
    }
}
const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({ where: { id: +id } })
    return user;
}
const updateUserById = async (id: string, fullname: string, email: string, address: string) => {
    const updateUser = await prisma.user.update({
        where: { id: +id },
        data: {
            name: fullname,
            email: email,
            address: address
        }

    })
    return updateUser;
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }