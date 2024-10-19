import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    telephone: { type: String, required: true },
    avatar: { type: String, required: true, default: './images/user.png' },
    isAdmin: { type: Boolean, required: true, default: false }
},
    {
        timestamp: true
    }

)

export const User = mongoose.Model("User", UserSchema)