import * as Koa from 'koa';
import * as Router from 'koa-router';
import logger = require('koa-logger');
import bodyparser = require('koa-bodyparser')
import { addBook, deleteBook, getBooks, getPnr, updateBook } from './contrPlusSer';
import cors = require("@koa/cors");


const port = process.env.PORT || 8080;

const app = new Koa();

const router = new Router();
app.use(cors());
app.use(logger());
app.use(bodyparser());
app.use(router.routes());

router.get('/pnr/:pnrId',getPnr)
router.get('/books',getBooks)
router.post('/',addBook)
router.put('/:id',updateBook)
router.delete('/:id',deleteBook)

console.log(` My koa server is up and listening on port ${port}`)

app.listen(port)
export default app;

