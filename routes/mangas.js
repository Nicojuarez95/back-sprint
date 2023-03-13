import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/manga/create.js'
import allControllers from '../controllers/categories/all.js'
import exist_title from '../middlewares/manga/exists_title.js'
import is_active from '../middlewares/author/is_active.js'
import getMangas from '../controllers/manga/get_mangas.js'
import jwtmiddleware from '../middlewares/jwtmiddleware.js'

let router = express.Router()
const { create } = mangaCreate
const { all } = allControllers
const { allMangas } = getMangas


router.post("/", jwtmiddleware ,is_active, validator(mangaSchema), exist_title, create);
router.get("/", all);
router.get("/view", allMangas)

export default router