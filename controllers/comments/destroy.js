import { Comment } from "../../models/Comment.js"

const controller = {

    destroy: async (req, res, next) => {
        try {
            let { id } = req.params
            let comment = await Comment.deleteOne(
                { _id: id }
            )
            if (comment){
                return res.status(200).json({
                    message: 'Comment deleted'
                })
            } else {
                return res.status(404).json({
                    message: 'Comment not found'
                })
            }
        } catch (error) {
            next (error)
        }
    }
}

export default controller