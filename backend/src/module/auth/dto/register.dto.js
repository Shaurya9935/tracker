import Joi from "joi";

class RegisterDto extends BaseDto{
    static schema = Joi.object({
        name:Joi.string().min(2).max(50).trim().required(),
        password: Joi.string().min(8).required().trim().messages({
            "string.min" : "Password must contain atleast 8 characters",
            "any.required" : "Password is required"
        }),
        email:Joi.string().email().lowercase().required()
    })
}

export default RegisterDto