import express from "express";
import dotenv from "dotenv";
import { DateBase } from "./DB/DB.js";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const app = express();

// Enable CORS for specific origin
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON request bodies
app.use(express.json());

// Use routes
app.use("/", (req, res) => {
    res.send("Hello all aws ec2 success")
})
app.use("/api", routes);

// Initialize database
DateBase();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
