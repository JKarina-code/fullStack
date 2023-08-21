import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js"
import patientsRoutes from "./routes/patientRoutes.js"

const app = express();


app.use(express.json())
dotenv.config();
connectDB();

const port = process.env.PORT || 4000;
app.use("/vets", vetRoutes);
app.use("/patients", patientsRoutes)
app.listen(port, () => {
  console.log(`The server is running on the port${port}`);
});
