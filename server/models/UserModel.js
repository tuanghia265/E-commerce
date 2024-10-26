import mongoose from "mongoose";
import bcrypt from 'bcrypt'

//Schema
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

UserSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema)

export default User