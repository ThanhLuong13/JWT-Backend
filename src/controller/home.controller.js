import userService from "../service/User.service";


export const createUserController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password
    const username = req.body.username
    userService.createUser(email, password, username)

    return res.send("User created")
}