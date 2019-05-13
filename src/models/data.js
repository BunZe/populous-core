import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
    deviceID: String,
    numProbed: Number,
    timestamp: {type: Date, default: Date.now()}
});

export default mongoose.model('Data', dataSchema);