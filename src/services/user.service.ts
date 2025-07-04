
import getConnections from "config/database";
import { PrismaClient } from '@prisma/client';
const handleCreateUser = async (
    fullname: string,
    email: string,
    address: string
) => {

    const prisma = new PrismaClient()
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
    const connection = await getConnections();
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `user`'
        );
        return results;
    } catch (err) {
        return [];
    }

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
    try {
        const connection = await getConnections();
        const sql = 'SELECT * FROM `users` WHERE `id` = ? ';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);

        return result[0];
    } catch (err) {
        return [];
    }
}
const updateUserById = async (id: string, fullname: string, email: string, address: string) => {
    try {
        const connection = await getConnections();
        const sql = 'UPDATE `users` SET `name` = ?,`email` = ?,`Address` = ? WHERE `id` = ? ';
        const values = [fullname, email, address, id];
        const [result, fields] = await connection.execute(sql, values);

        return result[0];
    } catch (err) {
        return [];
    }
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }