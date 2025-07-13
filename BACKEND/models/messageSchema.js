import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minLength:[3, "First Name Must constain at least 3 Characater"],
    },
    lastName: {
        type: String,
        required:true,
        minLength:[3, "Last name cosntain at least 3 character"],
    },
    email: {
        type: String,
        required:true,
        validate:[validator.isEmail, "Please Provide a valid Email"],
    },
    phone: {
        type: String,
        required:true,
        minLength:[11,"Phone number Must contain Exact 11 Digits"],
        maxLength:[11, "phone number must contain 11 digit"],
    },
    message: {
        type: String,
        required:true,
        minLength:[10,"Message Must contain at Least 10 charcter"],
    },
});

export const Message = mongoose.model("Message",messageSchema)