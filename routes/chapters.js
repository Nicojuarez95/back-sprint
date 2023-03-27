import passport from '../middlewares/passport.js'
import controller from '../controllers/chapters/create.js'
import express from 'express'
import { schema, schemaUpdate } from '../schemas/chapters.js'
import validator from '../middlewares/validator.js'
import existsOrder from '../middlewares/exists_order.js'
import nextOrder from '../middlewares/next_order.js'
import addFrontPhoto from '../middlewares/add_front_photo.js'
import findsID from '../middlewares/auth/find_id.js'
import isActive from '../middlewares/author/is_active.js'
import isProperyOf from '../middlewares/author/is_property_of.js'
import chapterController from '../controllers/chapters/get_one.js'
import getChapters from '../controllers/chapters/get_chapters.js'
import chapter_readAll from '../controllers/chapters/read_all.js'
import updateChapter from '../controllers/chapters/update.js'
import deleteChapter from '../controllers/chapters/destroy.js'
import chapterIsProperyOF from '../middlewares/author/chapter_is_proterty_of.js'

const router = express.Router()

const {create} = controller
const { get_one } = chapterController;
const {get_chapter} = getChapters
const { update } = updateChapter
const { destroy } = deleteChapter
const {read_all} = chapter_readAll

router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), existsOrder, nextOrder, addFrontPhoto,create)
router.get("/:id", get_one )
router.get("/all/:id", read_all)
router.get('/', get_chapter)

router.put("/:id", passport.authenticate("jwt",{session:false}), validator(schemaUpdate),findsID, isActive, chapterIsProperyOF , update)

router.delete("/:id", passport.authenticate("jwt",{session:false}),findsID, isActive, chapterIsProperyOF , destroy)

export default router
