import mongoose from "mongoose";
import { env } from "./environment.js";
const connectDatabase = async () => {
    const conn = await mongoose.connect(env.MONGODB_URI)
        .then(() => {
            console.log('MongoDB is connected');

        })
        .catch((err) => {
            console.error('Error:', err);
        })
}
export default connectDatabase;