import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderItems: {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        img: { type: String, required: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        }

    },
    shippingAddress: {
        street: { type: String, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true }
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "Paypal"
    },
    paymentResult: {
        id: String,
        status: String,
        update_item: String,
        email_address: String
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    deliveryPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalCost: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    isDelivery: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    deliveryAt: {
        type: Date
    }
},
    {
        timestamp: true
    }
)
export const Order = mongoose.model("Order", OrderSchema)