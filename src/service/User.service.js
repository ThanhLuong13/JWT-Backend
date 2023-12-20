import mysql from "mysql2"
import bcrypt from "bcrypt"

const saltRounds = 10;

class UserService {
    createUser(email, password, username) {
        const hashPassword = bcrypt.hashSync(password, saltRounds);
        console.log("hashPassword: ", hashPassword);

        const compare = bcrypt.compareSync(password, hashPassword)
        console.log(compare);

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt'
        });

        connection.query(
            'insert into users (email, password, username) values (?, ?, ?)', [email, hashPassword, username],
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }
}

const userService = new UserService()
export default userService