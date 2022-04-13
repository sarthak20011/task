import { Request, Response } from "express";
import user from "../models/user";
import jwt from "jsonwebtoken";
import device from "../models/device";
import { decode } from "punycode";

const addDevice = async (req: Request, res: Response) => {
    const decodedToken = req.body.decodedToken
    const decode = decodedToken.id;
    const {
        deviceType,
        deviceName,
        model,
    } = req.body;

    const Device = new device({
        userid: decode,
        deviceType: deviceType,
        deviceName: deviceName,
        model: model,
    });
    const data = await Device.save();
    res.status(200).json({ Message: "Device added successfully", device: data });
}


const updateDevice = async (req: Request, res: Response) => {
    const decodedToken = req.body.decodedToken
    const decode = decodedToken.id;
    const data = await device.updateOne(
        { userid: decodedToken.id },
        { $set: req.body }
    );
    res.json({ Device: "device updated" });
}

const removeDevice = async (req: Request, res: Response) => {
    const decodedToken = req.body.decodedToken
    const decode = decodedToken.id;
    const data = await device.deleteOne({ userid: decodedToken.id });
    res.json({ Message: "data Deleted" });
}

const getuserDevice = async (req: Request, res: Response) => {
    const decodedToken = req.body.decodedToken
    const decode = decodedToken.id;
    const data = await device.findOne({ userid: decodedToken.id });
    res.json({ Messge: "getting device details", device: data });
}




export default {
    addDevice, updateDevice,
    removeDevice, getuserDevice

};
