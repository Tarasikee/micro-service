import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = mongoose.model('product', new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
}))

export default productSchema
