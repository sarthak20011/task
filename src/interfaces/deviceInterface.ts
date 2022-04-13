import { ObjectId } from "bson";

interface device {
  id: ObjectId
  userid: ObjectId;
  deviceType: String;
  deviceName: String;
  model: Number;
  status: Number;

}

export default device;
