import mongoose from "mongoose";
import user from "../models/device"
const Model_Name = "device";
import deviceInterface from "../interfaces/deviceInterface";


const deviceSchema = new mongoose.Schema<deviceInterface>({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    deviceType: {
        type: String,
        required: true,
    },
    deviceName: {
        type: String,
        required: true,
    },
    model: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 1,
        required: true,
    },
},
    {
        timestamps: true,
    },
);

const device = mongoose.model<deviceInterface>(Model_Name, deviceSchema);

export default device;

