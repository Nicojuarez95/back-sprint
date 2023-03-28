import Chapter  from '../../models/Chapter.js'

const controller = {
    read_all: async (req, res, next) => {
        try {
            let chapters = await Chapter.find({ manga_id : req.params.id })
                .select('title order pages cover_photo _id')
                .populate({
                    path: 'manga_id',
                    select: 'title _id'
                })
            return res.status(200).json({ chapters })
        } catch (error) {
            next(error)
        }
    }
}
export default controller