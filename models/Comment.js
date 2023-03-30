import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    chapter_id: { type: mongoose.Types.ObjectId, required: true, ref: 'chapters' },
    user_id: { type: mongoose.Types.ObjectId, required: true, ref: 'users' },
    text: { type: String, required: true },
    commentable_id: { type: mongoose.Types.ObjectId, required: false, ref: 'comments'},
},{
    timestamps: true
})

export const Comment = mongoose.model('comments', commentSchema)

