const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Posts', PostSchema);