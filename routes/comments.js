import express from 'express'
import { createSchema } from '../schemas/comments.js'
import createComment from '../controllers/comments/create.js'
import all_from_chapters from '../controllers/comments/all_from_chapter.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'


let router = express.Router();

const { create } = createComment;
const { all_from_chapter } = all_from_chapters

router.post('/', passport.authenticate("jwt", {session: false}), validator(createSchema), create);
router.get('/', passport.authenticate("jwt", {session: false}), all_from_chapter);


export default router
