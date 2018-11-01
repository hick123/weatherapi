const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actMood = new Schema({
    activity: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        required: true
    },
    weather: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ActivityMood', actMood, 'activitymoods');