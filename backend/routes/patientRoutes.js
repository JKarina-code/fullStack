import express from "express";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "../controllers/PatientController.js";

import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/addPatient", checkAuth, addPatient);
router.get("/getPatients", checkAuth, getPatients);

router.get("/getPatient/:id", checkAuth, getPatient);
router.put("/updatePatient/:id", checkAuth, updatePatient);
router.delete("/deletePatient/:id", checkAuth, deletePatient);

export default router;


