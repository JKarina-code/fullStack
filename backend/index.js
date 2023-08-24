import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import vetRoutes from "./routes/vetRoutes.js";
import patientsRoutes from "./routes/patientRoutes.js";
import cors from "cors";
import { FRONTEND_URL, PORT } from "./config.js";
const app = express();

//Using Cors
const allowedDomains = [FRONTEND_URL];
const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1) {
      // Origen Request is allowed
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();
connectDB();

app.use("/vets", vetRoutes);
app.use("/patients", patientsRoutes);
app.listen(PORT, () => {
  console.log(`The server is running on the port: ${PORT}`);
});
