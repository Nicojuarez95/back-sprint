import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/manga/create.js'
import allControllers from '../controllers/categories/all.js'
import exist_title from '../middlewares/manga/exists_title.js'
import is_active from '../middlewares/author/is_active.js'
import getMangas from '../controllers/manga/get_mangas.js'
import jwtmiddleware from '../middlewares/jwtmiddleware.js'
import getOne from '../controllers/manga/get_one.js'

let router = express.Router()
const { create } = mangaCreate
const { all } = allControllers
const { allMangas } = getMangas
const { get_one } = getOne


router.post("/", jwtmiddleware ,is_active, validator(mangaSchema), exist_title, create);
router.get("/", all);
router.get("/view", allMangas)
router.get('/:id', get_one )

export default router