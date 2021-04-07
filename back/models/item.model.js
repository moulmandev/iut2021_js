import mongoose from 'mongoose';

export const itemSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

export const Item = mongoose.model('Item', itemSchema);
