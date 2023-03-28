import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        manga_id:{ type:mongoose.Types.ObjectId, ref:'mangas', required:true },
        title: { type:String, required:true },
        pages: { type:Array, required:true },
        order: { type:Number },
        cover_photo: { type: String}
    },{
        timestamps: true
    }
)
const Chapter = mongoose.model('chapters', schema)
export default Chapter
