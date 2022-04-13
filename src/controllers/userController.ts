import { Request, Response } from "express";
import user from "../models/user";
import jwt from "jsonwebtoken";
import md5 from "md5";
import { error } from "console";
import createToken from "../middleware/jwtSign";
import encryptPassword from "../middleware/encrypt";


const signup = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = req.body;

  const exitUser: any = await user.findOne({ email: email });



  try {
    if (exitUser) {
      return res.status(400).json({ Message: "user logged in already" });
    }
   

    const User = new user({
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    await User.save(async (err, data) => {
      if (err) console.log(err.message);

      res.status(200).json({ Message: "SignedUp Successfully", user: data });
    });

  }
  catch (err) {
    res.status(400).json({ error: error })
  }

};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const data = await user.findOne({ email: email, status: 1 });

  if (data) {
    const passEncrypt = encryptPassword(password);
    const passwordObj = await user.findOne({ password: data.password });
    const userPassword = passwordObj?.password;
    if (passEncrypt === userPassword) {
      const token = createToken(data._id);
      res
        .status(200)
        .json({ message: "Data logged in successfully", data, token });
    } else {
      res.status(400).json({ message: "Password does not match!" });
    }
  } else {
    res.status(404).json({ message: "Incorrect email " });
  }
};


export default {
  login,
  signup,

};

