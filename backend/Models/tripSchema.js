import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    tripName : {
        type: String,
        required
    },
    Destination : {
        type: String
    },
    startDate : {
        type: Date
    },
    endDate : {
        type: Date
    },
    price : {
        type: Number,
        required: true
    },
    image : {
        type: String
    },
    Description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const tripModel = mongoose.model("trips", tripSchema);
export default tripModel;