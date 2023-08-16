const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        //trim: true,
        minlength: 3,
        required: true,
        default: "John"
    },
    surname: {
        type: String,
        //trim: true,
        minlength: 3,
        required: true,
        default: "Doe"
    }
})

const Person = mongoose.model('persons',PersonSchema);
module.exports = Person;