import * as express from 'express'
import * as userProc from '../processor/user'
import { User } from '../model/user'
export const userRouter = express.Router();

userRouter.route('/:userId').get( async (req, res, next) => {
    const user = await userProc.getUser(req.params.userId)
    res.json(user)
})

userRouter.route('/').post( async (req, res, next) => {
    await userProc.createUser({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phone_number,
    } as User )
    res.json({ status: 'POST / OK'})
})

userRouter.route('/').patch( async (req, res, next) => {
    await userProc.updateUser(req.body.userId,
        {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phone_number,
    } as User )
    res.json({ status: 'PATCH / OK'})
})

userRouter.route('/').delete( async (req, res, next) => {
    await userProc.deleteUser(req.body.userId)
    res.json({ status: 'DELETE / OK'})
})

