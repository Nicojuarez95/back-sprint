import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/manga/create.js'
import allControllers from '../controllers/categories/all.js'
import exist_title from '../middlewares/manga/exists_title.js'
import is_active from '../middlewares/author/is_active.js'
// import passport from '../middlewares/passport.js'
import jwtmiddleware from '../middlewares/jwtmiddleware.js'
import get_One from '../controllers/manga/get_one.js'


let router = express.Router()
const { create } = mangaCreate
const { all } = allControllers
const { getOne } = get_One


router.post("/", jwtmiddleware ,is_active, validator(mangaSchema),exist_title, create);
router.get("/", all);
router.get('/id',getOne)


export default router