import { createContext, useEffect, useState } from "react";
import clientAxios from "../api/axios";
import useAuth from "../hooks/useAuth";
const PatientsContext = createContext();

const PatientsProvider = ({ children }) => {
  const { auth } = useAuth();
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getPatients = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clientAxios("/patients", config);
        setPatients(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPatients();
  }, [auth]);

  const savePatient = async (patient) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`,
      },
    };

    if (patient.id) {
      try {
        const { data } = await clientAxios.put(
          `/patients/${patient.id}`,
          patient,
          config
        );
        const patientsUpdate = patients.map((patientState) =>
          patientState._id === data._id ? data : patientState
        );
        setPatients(patientsUpdate);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        delete patient.id;
        const { data } = await clientAxios.post("/patients", patient, config);
        const { createdAt, updatedAt, __v, ...patientSave } = data;
        setPatients([patientSave, ...patients]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };

  const setEdition = (patient) => {
    setPatient(patient);
  };

  const deletePatient = async (id) => {
    const confirmed = confirm("You confirm that you want to delete the patient?");
    if (confirmed) {
      try {
        const token = localStorage.getItem("token");

        const config = {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Authorization: `Bearer ${token}`,
          },
        };

        await clientAxios.delete(`/patients/${id}`, config);
        const patientsUpdate = patients.filter(
          (patientState) => patientState._id !== id
        );
        setPatients(patientsUpdate);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <PatientsContext.Provider
      value={{
        patients,
        savePatient,
        patient,
        setEdition,
        deletePatient,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export { PatientsProvider };

export default PatientsContext;
