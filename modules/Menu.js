const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    breakfast: {
        type: String,
        required: true
    },
    lunch: {
        type: String,
        required: true
    },
    dinner: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Menus', MenuSchema);