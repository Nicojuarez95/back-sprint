import Chapter from "../../models/Chapter.js"

const controller = {

    get_chapter: async (req, res, next) => {
        let chapters = {}//esto es para que envie el objeto que tiene todos los cap
        let pagination = {//configuro la paginacion
            page: 1,
            limit: 4,//rdto es que vienen paginadas de a 4
        }
        if (req.query.manga_id) {
            chapters.manga_id = req.query.manga_id
        }
        if (req.query.page) { //esto es para que si tiene mas de una pagina se pueda acceder
            pagination.page = req.query.page//si la pag q busca no existe devuelve un array vacio
        }
        try {
            let chapter = await Chapter.find(chapters)
            .select('title order  -_id')
            .populate({
                path: 'manga_id',
                select: 'cover_photo -_id'
            })
                .sort({ order: 1 })
                .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
                .limit(pagination.limit > 0 ? pagination.limit : 0)
            return res
                .status(200)
                .json({ chapter: chapter})
        }
        catch (error) {
            next(error)
        }
    }
}
export default controller

