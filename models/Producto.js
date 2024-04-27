const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    unidades: {
        type: Number,
        required: true
    },


}, {versionkey: false});

module.exports = mongoose.model('Productos', productoSchema);