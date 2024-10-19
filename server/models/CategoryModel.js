import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true }
},
    {
        timestamp: true
    }

)

export const Category = mongoose.Model("Category", CategorySchema)