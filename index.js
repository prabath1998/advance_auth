import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();

app.get('/',(req, res) => {
    res.send("hello world");
})

app.listen(3000, () => {
    connectDB();
    console.log("Server running on port 3000");
});



