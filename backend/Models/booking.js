import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    tripId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trips',
        required: true
    },
    bookingDate : {
        type: Date,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const bookingModel = mongoose.model("bookings", bookingSchema);
export default bookingModel;