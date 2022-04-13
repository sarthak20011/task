import express from "express";
import controllers from "../controllers/userController";
import config from "../config/db";
import models from "../models/user";
const router = express.Router();
//const app = express();
import verifyjwtToken from "../middleware/jwtVerify";
import { userSignupValidator, userLoginValidator } from "../validator/userValidator"
import deviceController from "../controllers/deviceController";


router.post("/signup", userSignupValidator, controllers.signup);

router.post("/login", userLoginValidator, controllers.login);

router.post("/addDevice", verifyjwtToken, deviceController.addDevice);

router.post("/updateDevice", verifyjwtToken, deviceController.updateDevice);

router.delete("/removeDevice", verifyjwtToken, deviceController.removeDevice);

router.get("/getuserDevice", verifyjwtToken, deviceController.getuserDevice);


export default router;

