import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const password = encodeURIComponent(process.env.MONGO_PASSWORD);

const DB =  `mongodb+srv://muhammedsafvanmp7:${password}@hosting.pgqaw.mongodb.net/`

export const DateBase = () => {
  mongoose
    .connect(DB)
    .then(() => console.log(`DB connected`))
    .catch((error) => console.log(error));
};
