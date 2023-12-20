import express from 'express';
import { createUserController } from '../controller/home.controller';

const router = express.Router();

const initWebroute = (app) => {
    router.get('/', (req, res) => {
        return res.render('home')
    })
    router.post('/users/create-user', createUserController)
    return app.use("/", router)
}

export default initWebroute