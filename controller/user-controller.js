import userSchema from "../model/User.js";
import bcrypt from "bcrypt";

const getAllUser = async (req, res) => {
let users;
try{
    users = await userSchema.find();
} catch(err){
   res.status(500).json({message: "Fetching users failed"});
}
res.status(200).json({users})
};

const signup = async (req,res) => {
try{
    if(!req.body.name || !req.body.email || !req.body.password){
        res.status(400).json({message: "All fields are required"});
    }
    const existingUser = await userSchema.findOne({email: req.body.email});
    if(existingUser){
        res.status(400).json({message: "User already exists! login instead"});
    }
    const newUser = await userSchema.create(req.body);
    res.status(201).json({message: "Signup successful",newUser});
}catch(err){
    res.status(500).json({message: "Signup failed"});
}
};

const login = async (req,res) => {
    try{
if(!req.body.email || !req.body.password){
    res.status(400).json({message: "All fields are required"});
    }
    const existingUser = await userSchema.findOne({email: req.body.email});
    if(!existingUser){
        res.status(400).json({message: "User does not exist! Signup instead"});
    }
    const isMatch = await bcrypt.compare(req.body.password, existingUser.password);
    if(!isMatch){
        res.status(400).json({message: "Invalid credentials"});
    }
    res.status(200).json({message:"login successful"});
    }catch(err){
        res.status(500).json({message: "Login failed"});
    }
};

export {getAllUser, signup, login};