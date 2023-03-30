import { Comment } from "../../models/Comment.js";

const controller = {
    create: async (req, res) =>{
        try {
            req.body.user_id = req.user.id
            await Comment.create(req.body)
            return res.status(200).json({
                success: true,
                message: "Comment created",
                data: req.body
            });
        } catch (err) {
            next (err)
        }
    }
}
export default controller