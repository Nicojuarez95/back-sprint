import express from 'express'
import mangaSchema from '../schema/mangas.js'
import validator from '../middleware/validator.js'
import mangaCreate from '../controlers/manga/create.js'
import exist_title from '../middleware/manga/exists_title.js'


let router = express.Router()
const { create } = mangaCreate
router.get('/',function (req, res, next) {
    res.send('New Manga');
});
router.post("/",validator(mangaSchema),exist_title, create);

export default router