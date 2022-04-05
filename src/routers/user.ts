import * as express from 'express'

export const userRouter = express.Router();

userRouter.route('/:userId').get((req, res, next) => {
    res.json({ status: 'GET / OK'})
})

userRouter.route('/').post((req, res, next) => {
    res.json({ status: 'POST / OK'})
})

userRouter.route('/').patch((req, res, next) => {
    res.json({ status: 'PATCH / OK'})
})

userRouter.route('/').delete((req, res, next) => {
    res.json({ status: 'DELETE / OK'})
})

