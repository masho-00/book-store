import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import bookRoutes from './routes/bookRoutes.js'
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credential:true, 
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("this is Home page");
});
app.get("/login", (req, res) => {
  res.send("this is Login page");
});

app.use("/books", bookRoutes);

connectDB();

app.listen(5555, () => {
  console.log("connected to backend");
});
