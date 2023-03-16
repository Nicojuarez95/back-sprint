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
import updateChapter from '../controllers/chapters/update.js'
import findsID from '../middlewares/auth/find_id.js'
import isActive from '../middlewares/author/is_active.js'


const router = express.Router()

const {create} = controller
const { get_one } = chapterController;
const {get_chapter} = getChapters
const { update } = updateChapter

router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), existsOrder, nextOrder, addFrontPhoto,create)
router.get("/:id", get_one )
router.get('/', get_chapter)
router.put("/:id", passport.authenticate("jwt",{session:false}), validator(schema),findsID, isActive,update)

export default router
