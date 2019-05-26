import mongoose from "mongoose";

const deviceSchema = mongoose.Schema({
    deviceID: String,
    label: String,
});

export default mongoose.model('Device', deviceSchema);