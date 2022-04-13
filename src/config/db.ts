import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({ path: __dirname + '/../../.env' });
const url = String(process.env.URL);

mongoose.connect(url);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});

export default db;
