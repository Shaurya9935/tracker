import ApiError from "../../common/utils/api-error.js"
import User from "./auth.model.js"
import crypto from "crypto"
import { generateAccessToken, generateRefreshToken, generateResetToken, verifyRefreshToken } from "../../common/utils/jwt.util.js"

const hashToken = (token) => {
    crypto.createHash("sha256").update(token).digest("hex")
}

const register = async ({name, email, password}) => {

    const existing = await User.findOne({email});
    if(existing) throw new ApiError.conflict("Email already exist");

    const user = await User.create ({
        name,
        email,
        password
    })
    const userObj = user.toObject();
    delete userObj.password
    
    return userObj
}

const login = async({email, password}) => {
    const user = await User.findOne({email}).select("+password");
    if(!user) throw ApiError.unauthorized("User not Found")
    
    const isMatch = await User.comparePassword(password)
    if(!isMatch) throw ApiError.
    
}

export default{register}