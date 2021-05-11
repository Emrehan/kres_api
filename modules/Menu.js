const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    food: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Menus', MenuSchema);