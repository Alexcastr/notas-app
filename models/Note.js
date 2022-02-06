const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'por favor agrega un titulo'],
        unique: true,
        trim:true,
        maxlength: [40, 'El titulo no puede tener más de 40 caracteres'],

    }, 
    description:{
        type:String,
        required: true,
        maxlength:[200, 'la descripción no puede tener más de 200 caracteres']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);