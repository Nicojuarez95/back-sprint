import mongoose from "mongoose";

let schema = new mongoose.Schema({
    manga_id: { type: mongoose.Types.ObjectId, ref: 'mangas', required:false },//poner true
    title: { type: String, required: true },
    cover_photo: { type: String, required: false },//poner true
    pages: [{ type: String, required: true }],
    order: { type: Number, required: false},
},{
    timestamps: true
})

let Chapter = mongoose.model('chapters', schema)

export default Chapter

