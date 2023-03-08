
import controller from '../controllers/chapters/create.js'
import express from 'express'
import schema from '../schema/chapters.js'
import validator from '../middleware/validator.js'
import existsOrder from '../middleware/exists_order.js'
import nextOrder from '../middleware/next_order.js'
import addFrontPhoto from '../middleware/add_front_photo.js'

const router = express.Router()

const {create} = controller

router.post("/",/* passport.authenticate("jwt",{session:false}) */ validator(schema), existsOrder, nextOrder, addFrontPhoto,create)
router.get("/",)

export default router
