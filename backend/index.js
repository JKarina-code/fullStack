import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import vetRoutes from "./routes/vetRoutes.js";
import patientsRoutes from "./routes/patientRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());


dotenv.config();
connectDB();
//Using Cors
const allowedDomains = [process.env.FRONTEND_URL];
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


app.use("/api/vets", vetRoutes);
app.use("/api/patients", patientsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`The server is running on the port: ${PORT}`);
});
