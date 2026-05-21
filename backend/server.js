import exp from "express";
import { connect } from "mongoose";
import cors from "cors";
import { empRoute } from "./APIs/empApp.js";
const app = exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173","https://employee-web-pi.vercel.app"],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
await connect(
  "mongodb://shritha:shritha123@ac-kx3nvqe-shard-00-00.3hjvrvy.mongodb.net:27017,ac-kx3nvqe-shard-00-01.3hjvrvy.mongodb.net:27017,ac-kx3nvqe-shard-00-02.3hjvrvy.mongodb.net:27017/shrithaDB?ssl=true&replicaSet=atlas-64nlwe-shard-0&authSource=admin&appName=Cluster0"
);  console.log("DB connected");
    app.listen(4000, () => console.log("server listening on port 4000.."));
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