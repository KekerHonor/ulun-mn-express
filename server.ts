import express, {Express, Request, Response} from 'express';
import userRoutes from './src/routes/user.routes';
import productsRoutes from './src/routes/products.routes'

import 'mysql'
import productsController from './src/services/products/products.controller';

const cors = require('cors')
const app: Express = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/user', userRoutes)
app.use('/product', productsRoutes)
app.post('/create', productsController.createProduct)


app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript');
});

app.post('/post', (req, res)=>{

})


app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`);
});