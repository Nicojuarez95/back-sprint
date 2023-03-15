import  Chapter  from '../../models/Chapter.js'

const controller = {
    get_one:  async (req, res, next) => {
        try {

            let chapter = await Chapter.findById(req.params.id)
                .select('-__v -updatedAt -createdAt');


            let next = await Chapter.findOne({manga_id: chapter.manga_id, order: chapter.order + 1 })


            if (chapter) { //este incompleto 
                return res.status(200).json({
                    success: true,
                    chapter,
                    next: next._id
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


