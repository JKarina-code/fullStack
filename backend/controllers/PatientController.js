import Patient from "../models/patient.js";

const addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  patient.vet = req.vet._id;

  try {
    const patientSave = await patient.save();
    res.json(patientSave);
  } catch (error) {
    throw error;
  }
};

const getPatients = async (req, res) => {
  const patients = await Patient.find().where("vet").equals(req.vet);
  res.json(patients);
};

const getPatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);
  if (!patient) {
    return res.status(404).json({ msg: "No Found" });
  }
  if (patient.vet._id.toString() !== req.vet._id.toString()) {
    return res.status(401).json({
      message: "Invalid action",
    });
  }
  res.json(patient);
};

const updatePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);
  if (!patient) {
    return res.status(404).json({ msg: "No Found" });
  }
  if (patient.vet._id.toString() !== req.vet._id.toString()) {
    return res.status(401).json({
      message: "Invalid action",
    });
  }

  patient.name = req.body.name || patient.name;
  patient.owner = req.body.owner || patient.owner;
  patient.email = req.body.email || patient.email;
  patient.date = req.body.date || patient.date;
  patient.symptoms = req.body.symptoms || patient.symptoms;

  try {
    const patientUpdate = await patient.save();
    res.json(patientUpdate);
  } catch (error) {
    throw error;
  }
};
const deletePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);
  if (!patient) {
    return res.status(404).json({ msg: "No Found" });
  }
  if (patient.vet._id.toString() !== req.vet._id.toString()) {
    return res.status(401).json({
      message: "Invalid action",
    });
  }

  try {
    await patient.deleteOne();
    res.json({ msg: "Patient deleted" });
  } catch (error) {
    throw error;
  }
};
export { addPatient, getPatients, getPatient, updatePatient, deletePatient };
