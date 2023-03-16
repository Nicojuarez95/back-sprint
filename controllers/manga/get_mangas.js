import Manga from "../../models/Manga.js";

const controller = {

    allMangas: async (req, res, next) => {

        let consultas = {}

        let pagination = {
            page: 1,
            limit: 6
        }

        if (req.query.title) {
            consultas.title = new RegExp(req.query.title.trim(), 'i')
        }
        if (req.query.category) {
            consultas.category_id = req.query.category.split(",")
        }

        if (req.query.page) {
            pagination.page = req.query.page
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity
        }

        try {
            let all = await Manga.find(consultas)
                .select('title category_id cover_photo _id')
                .sort({ title: 1 })
                .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
                .limit(pagination.limit > 0 ? pagination.limit : 0)
            return res.status(200).json({ mangas: all })
        } catch (err) {
            next(err)
        }

    }
}


export default controller