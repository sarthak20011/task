import mongoose from "mongoose";
const Model_Name = "user";
import userInterface from "../interfaces/userInterface";
import encrypt from "../middleware/encrypt"


const userSchema = new mongoose.Schema<userInterface>({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
},
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  this.password = encrypt(this.password);
  next();
});

const user = mongoose.model<userInterface>(Model_Name, userSchema);

export default user;
// function encryptPassword(password: String): String {
//   throw new Error("Function not implemented.");
// }

