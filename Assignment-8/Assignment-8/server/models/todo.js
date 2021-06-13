import mongoose from 'mongoose';

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    lastModifiedDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    deadlineDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    deadlineTime: {
        type: String,
        required: false,
        default: "11:59 PM"
    }



},
{

    versionKey:false

});

ToDoSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

ToDoSchema.set('toJSON', { virtuals:true });

const model = mongoose.model('ToDo', ToDoSchema); 

export default model;