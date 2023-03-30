import userRouter from './auth.js'
import chapterRouter from './chapters.js'
import mangasRouter from '../routes/mangas.js'
import authorRouter from './authors.js'
import express from 'express'
import paymentRouter from './payment.js'
import commentsRouter from './comments.js'

let router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});


//rutas de todos los recursos
//a traves del metodo .use() le indico al enrutador principal que use esas rutas con esa palabrita(endpoint)
router.use('/auth',userRouter)
router.use('/authors', authorRouter)
router.use('/payment', paymentRouter)
router.use('/mangas', mangasRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas-form', mangasRouter)
router.use('/comments', commentsRouter)


export default router