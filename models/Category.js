import mongoose from 'mongoose'
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    descripcion: { type: String, required: true },
    admin_id: { type: mongoose.Schema.Types.ObjectId,ref:'admin_id' ,required: true },
},
    {
        time_stamps: true,
    }
);
let Category = mongoose.model('categories', categorySchema);
export default Category