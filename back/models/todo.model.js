import mongoose from 'mongoose';

export const todoSchema = new mongoose.Schema({
    name: String,
    checked: Boolean
});

export const Todo = mongoose.model('Todo', todoSchema);
