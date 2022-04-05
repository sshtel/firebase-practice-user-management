import * as express from 'express'
import * as routers from './routers'
import * as firestore from './repository/firestore'


firestore.initFirebaseAdmin();


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use('/', routers.rootRouter)
app.use('/user', routers.userRouter)

app.listen(port, () => {
    console.log(`server started.. http://localhost:${port}`)
})
