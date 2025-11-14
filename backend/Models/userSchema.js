import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    email : {
        type : String,
        required: true
    },

    phoneNumber : {
            type: String,
            required: true
    },
    password:{
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    verified: {
        type: Boolean,
        default: false
    }


})

const userModel = mongoose.model("users", userSchema)
export default userModel;