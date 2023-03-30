import { Comment } from "../../models/Comment.js";

const controller = {
    
    all_from_chapter: async (req, res, next) => {

        let pagination = {
            page: 1,
            limit: 4,
        }

        if (req.query.page) {
            pagination.page = req.query.page;
        }
        if (req.query.quantity) {
            pagination.limit = req.query.quantity;
        }

        try {
            let comments = await Comment.find({ chapter_id: req.query.chapter_id }).select('text user_id').populate('user_id', 'name photo')
                .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
                .limit(pagination.limit > 0 ? pagination.limit : 0);
            if (comments) {
                return res.status(200).json({
                    success: true,
                    comments
                })
            }
        } catch (error) {
            next (error)
        }
    }
}


export default controller