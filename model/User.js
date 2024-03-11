import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator:{
            validator :(value)=>{
                return validator.isEmail(value);
            },
        }
    },
    password: {
        type: String,
        required: true,
        milength: 8
    },

   
}, 
{timestamps: true}
);

Schema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const userSchema = mongoose.model("User", Schema);

export default userSchema;