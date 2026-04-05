import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"]
    },

    email: {
        type: String,
        trim: true,
        required: [true, "email is required"],
        unique: true,
        lowercase: true
    },

    password : {
        type : String,
        required: [true, "password is required"],
        select: false,
        minlength: 8
    },
    isVerfied : {
        type: Boolean,
        dafault : false
    },
    verificationToken : {type: String, select: false},
    refreshToken: {type: String, select: false},
    resetPasswordToken: {type: String, select: false},
    resetPasswordExpires: {type: String, select: false}
}, {timestamps: true});


export default mongoose.model("User", userSchema)