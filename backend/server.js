import exp from "express";
import { connect } from "mongoose";
import cors from "cors";
import { empRoute } from "./APIs/empApp.js";
const app = exp();
import dotenv from "dotenv";
dotenv.config();
//add cors middleware
app.use(
  cors({
   origin: [
  "http://localhost:5173",
  "https://week6-employee-app.vercel.app"
],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
await connect(process.env.MONGO_URI);
  console.log("DB connected");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`server listening on port ${PORT}..`)
);
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});