import mysql from 'mysql2/promise';

// Create the connection to database
const getConnections = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "123123",
        database: 'nodejspro',
    });
    return connection;

}
export default getConnections