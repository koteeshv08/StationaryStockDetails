const mongoose = require('mongoose');

require('dotenv').config({ path: '../environment.env' });

const StationerySchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model('stationery', StationerySchema);
