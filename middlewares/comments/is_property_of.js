import { Comment } from "../../models/Comment.js";

const is_property_of = async (req, res, next) => {
    
    try {
        const comment = await Comment.findOne({ _id: req.params.id, user_id: req.user._id })
        if (comment) {
            return next()
        } else {
            return res.status(404).json({
                message: 'You are not the owner of the comment'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}
export default is_property_of