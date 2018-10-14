const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScreenSchema = new Schema({
    name: String,
    seatInfo: {
        "A": {
            "numberOfSeats": Number,
            "aisleSeats": [Number]
        },
        "B": {
            "numberOfSeats": Number,
            "aisleSeats": [Number]
        },
        "D": {
            "numberOfSeats": Number,
            "aisleSeats": [Number]
        }
    }
});

mongoose.model('screens', ScreenSchema);