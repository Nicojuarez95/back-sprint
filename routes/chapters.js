import passport from '../middlewares/passport.js'
import controller from '../controllers/chapters/create.js'
import express from 'express'
import schema from '../schemas/chapters.js'
import validator from '../middlewares/validator.js'
import existsOrder from '../middlewares/exists_order.js'
import nextOrder from '../middlewares/next_order.js'
import addFrontPhoto from '../middlewares/add_front_photo.js'

const router = express.Router()

const {create} = controller

router.post("/",passport.authenticate("jwt",{session:false}), validator(schema), existsOrder, nextOrder, addFrontPhoto,create)
router.get("/",)

export default router
