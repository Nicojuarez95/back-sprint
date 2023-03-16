import express from 'express'
import mangaSchema from '../schemas/mangas.js'
import validator from '../middlewares/validator.js'
import mangaCreate from '../controllers/manga/create.js'
import allControllers from '../controllers/categories/all.js'
import exist_title from '../middlewares/manga/exists_title.js'
import is_active from '../middlewares/author/is_active.js'
import getMangas from '../controllers/manga/get_mangas.js'
import passport from '../middlewares/passport.js'
import getOne from '../controllers/manga/get_one.js'
import getMe from '../controllers/manga/get_me.js'
import findId from '../middlewares/auth/find_id.js'
import updateController from '../controllers/manga/update.js'
import is_property_of from '../middlewares/author/is_property_of.js'

let router = express.Router()
const { create } = mangaCreate
const { all } = allControllers
const { allMangas } = getMangas
const { get_one } = getOne
const { get_me } = getMe
const { upd } = updateController

router.post("/",passport.authenticate("jwt", { session: false }), is_active, validator(mangaSchema), exist_title, create);
router.get('/me', passport.authenticate("jwt", { session: false }), findId, get_me)
router.get("/", all);
router.get("/view", allMangas)
router.get('/:id', get_one )
router.put("/:id", passport.authenticate("jwt", { session: false }), findId, is_active, is_property_of, upd)

export default router