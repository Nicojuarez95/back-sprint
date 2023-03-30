import express from 'express'
import { createSchema } from '../schemas/comments.js'
import createComment from '../controllers/comments/create.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'


let router = express.Router();

const { create } = createComment;

router.post('/', passport.authenticate("jwt", {session: false}), validator(createSchema), create)

export default router
