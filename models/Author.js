import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    date: {type: Date},
    photo: {type: String, required: true},
    user_id: { type: mongoose.Types.ObjectId, ref:"users", require: true },
    active: { type: Boolean },
    // time_stamps: { type: timestamps, require:true },
},{
    timestamps: true
})

let Author = mongoose.model('authors', schema)

export default Author