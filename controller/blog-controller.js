import blogSchema from "../model/Blog.js";

const getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogSchema.find();
        res.status(200).json({blogs});
    }catch(err){
        res.status(500).json({message: "Fetching blogs failed or No blog found"});
    }
};

const addBlog = async (req, res) => {
    try{
        if(!req.body.title || !req.body.content || !req.body.image ){
            res.status(400).json({message: "All fields are required"});
        }
        const newBlog = await blogSchema.create(req.body);
        res.status(201).json({message: "Blog created successfully", newBlog});
    }catch(err){
        res.status(500).json({message: "Blog creation failed"});
    }};

export {getAllBlogs, addBlog};
