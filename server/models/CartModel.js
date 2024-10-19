import mongoose from "mongoose";


const CartSchema = mongoose.Schema({
    cartItems: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        img: { type: String, required: true },
        prod: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        }
    }]
},
    {
        timestamp: true,
    }
)

const Cart = mongoose.Model("Cart", CartSchema)

export default Cart