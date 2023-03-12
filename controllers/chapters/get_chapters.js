import Chapter from '../../models/Chapter.js'

async function get_chapter(req, res, next){
    const manga_id = req.quey.manga_id;
    const page = req.query.page || 1;
    const limit = 4;
    const skip = (page - 1) * limit;
    try{
        const chapter = await Chapter.find({manga_id})
            .select('')
            .sort({order: 1})
            .skip(skip)
            .limit(limit);
        res.status(200).json({chapter});
    } catch (error) {
        next(error);
    }
}

export default {get_chapter};