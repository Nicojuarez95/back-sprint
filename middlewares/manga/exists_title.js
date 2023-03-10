import Manga from '../../models/Manga.js';

async function exist_title(req, res, next) {
    const title = await Manga.findOne({ title: req.body.title })
    
    if (title) {
        return res.status(400).send('This title already exist!')
    }

    return next() // te deja pasar para crearlo
}
export default exist_title