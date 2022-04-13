import { ObjectId } from "bson";

interface user {
  id: ObjectId
  firstName: String;
  lastName: String;
  password: string;
  email: String;

}

export default user;


