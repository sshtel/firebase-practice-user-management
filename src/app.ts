import * as express from 'express'
import * as routers from './routers'


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use('/', routers.rootRouter)

app.listen(port, () => {
    console.log(`server started.. http://localhost:${port}`)
})
