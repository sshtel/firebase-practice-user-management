import * as express from 'express'

export const rootRouter = express.Router();

rootRouter.route('/').get((req, res, next) => {
    res.json({ status: 'GET / OK'})
})

