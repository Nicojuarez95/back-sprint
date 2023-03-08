import mongoose from "mongoose";

let schema = new mongoose.Schema({
    manga_id: { type: mongoose.Types.ObjectId, ref: 'mangas', required: false },//poner true despues del PR
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: { type: Array, required: true },
    order: { type: Number, required: false},
},{
    timestamps: true
})

let Chapter = mongoose.model('chapters', schema)

export default Chapter

