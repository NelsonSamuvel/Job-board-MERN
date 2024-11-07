//Packages
import express from "express";
import cookieParser from "cookie-parser";
import connectDb from "./config/connectDb.js";
import { config } from "dotenv";

//Utils
import userRoutes from "./routes/userRoutes.js";

config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 8000;

connectDb(process.env.DATABASE_URL);

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server listening on ${port}`));
