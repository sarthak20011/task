import express from 'express';
import db from "./config/db";
import router from "./routes/userRoutes";

import dotenv from "dotenv";
dotenv.config({ path: __dirname + '/../.env' });

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.use(express.json());
app.use(router)
db;
app.listen(port, () => {
  console.log(`Server is on the port ${port}`);
});
