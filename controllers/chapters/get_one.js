import  Chapter  from '../../models/Chapter.js'

const controller = {
    get_one: async (req, res, next) => {
        try {
            let query = {
                manga_id: '',
                $or: [
                    { _id: req.params.id },
                    {}
                ]
            }
            console.log(query)
            if (req.query.order) {
                query.$or[1] = { order: Number(req.query.order) + 1 }
            }
            if (req.query.manga_id) {
                query.manga_id = req.query.manga_id
            }

            let chapter = await Chapter.find(query)
                .select('-updatedAt -createdAt -__v')
                .sort({ order: 1 })

            console.log(chapter)

            if(chapter.length > 0) {
                return res.status(200).json({
                    success: true,
                    chapter: chapter[0],
                    next: chapter?.[1]?._id
                })
            }

            return res.status(404).json({
                success: false,
            })

        } catch (error) {
            next(error)
        }
    }
}

export default controller;


