import passport from '../middlewares/passport.js'
import controller from '../controllers/chapters/create.js'
import express from 'express'
import schema from '../schemas/chapters.js'
import validator from '../middlewares/validator.js'
import existsOrder from '../middlewares/exists_order.js'
import nextOrder from '../middlewares/next_order.js'
import addFrontPhoto from '../middlewares/add_front_photo.js'
import get_Chapter from '../controllers/chapters/get_chapters.js'

const router = express.Router()

const {create} = controller
const {get_chapter} = get_Chapter

router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), existsOrder, nextOrder, addFrontPhoto,create)
router.get("/",)
router.get('/', get_chapter)

export default router
