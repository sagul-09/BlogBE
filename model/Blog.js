import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    }
},
{timestamps: true},
);

const blogSchema = mongoose.model("Blog", Schema);
export default blogSchema;