import express from 'express'
import { createSchema } from '../schemas/comments.js'
import createComment from '../controllers/comments/create.js'
import all_from_chapters from '../controllers/comments/all_from_chapter.js'
import validator from '../middlewares/validator.js'
import passport from '../middlewares/passport.js'
import updateComment from '../controllers/comments/update.js'
import is_property_of from '../middlewares/comments/is_property_of.js'


let router = express.Router();

const { create } = createComment;
const { all_from_chapter } = all_from_chapters
const { update } = updateComment

router.post('/', passport.authenticate("jwt", {session: false}), validator(createSchema), create);
router.get('/', passport.authenticate("jwt", {session: false}), all_from_chapter);
router.put('/:id', passport.authenticate("jwt", {session: false}), validator(createSchema), is_property_of, update)

export default router
