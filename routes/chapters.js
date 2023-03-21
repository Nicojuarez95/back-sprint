import passport from '../middlewares/passport.js'
import controller from '../controllers/chapters/create.js'
import express from 'express'
import schema from '../schemas/chapters.js'
import validator from '../middlewares/validator.js'
import existsOrder from '../middlewares/exists_order.js'
import nextOrder from '../middlewares/next_order.js'
import addFrontPhoto from '../middlewares/add_front_photo.js'
import chapterController from '../controllers/chapters/get_one.js'
import getChapters from '../controllers/chapters/get_chapters.js'

const router = express.Router()

const {create} = controller
const { get_one } = chapterController;
const {get_chapter} = getChapters

router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), existsOrder, nextOrder, addFrontPhoto,create)
router.get('/', get_chapter)
router.get("/:id", get_one )


export default router
