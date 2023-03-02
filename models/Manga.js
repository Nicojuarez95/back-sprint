import mongoose from "mongoose";


let schema = new mongoose.Schema(
    {
        author_id: { type: mongoose.Types.ObjectId, ref: 'author_id', required: true },
        company_id: { type: mongoose.Types.ObjectId, ref: 'company_id' },
        title: { type: String, required: true },
        cover_photo: { type: String, required: true },
        description: { type: String, required: true },
        category_id: { type: mongoose.Types.ObjectId, ref: 'category_id', required: true },

    },
    {
        timestamps: true,
    }
);

let Manga = mongoose.model('manga', schema);

export default Manga;