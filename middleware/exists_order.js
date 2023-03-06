import Chapter from "../models/Chapter.js"

async function existsOrder(req, res, next) {
    let {manga_id, order}  = req.body
    if(!order){
        return next()
    }else{
        let foundChapter = await Chapter.findOne({ order: order, manga_id: manga_id})
        if (foundChapter) {
            res.status(409).json({ mensaje: "Ya existe un documento con el valor especificado" });
        } else {
            next()
        }
    }
}

export default existsOrder