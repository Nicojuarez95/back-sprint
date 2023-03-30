import express from 'express'
import createComment from '../controllers/comments/create.js'
import validator from '../middlewares/validator.js'
import commentShema from '../schemas/comments.js'
import passport from 'passport.js'


let router = express.Router();

const { create } = createComment;

router.post('/', passport.authenticate("jwt", {session: false}), validator(commentShema), create)

export default router
