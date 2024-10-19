import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({

    name: { type: String, required: true },
    img: { type: String, required: true },
    imgBanner: { type: String },
    description: { type: String, required: true },
    review: [ReviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numOfReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 0 },
    isActive: { type: Boolean, required: true, default: true },
    discountID: { type: String, required: true, default: "" },
    categoryID: { type: String, required: true, default: "" }

},
    {
        timestamp: true
    }

)

const ReviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
},
    {
        timestamp: true
    }
)

export const Product = mongoose.Model("Product", ProductSchema)