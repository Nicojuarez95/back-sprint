import mongoose from "mongoose";

let schema = mongoose.Schema({
    manga_id: { type: mongoose.Schema.Types.ObjectId, ref: 'mangas', requiered:true },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: { type: Array, required: true },
    order: { type: Number, required: false },
},{
    timestamps: true
})

let Chapter = mongoose.model('chapters', schema)

export default Chapter

