import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import usePatients from "../hooks/usePatients";
const FormAdmin = () => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [alert, setAlert] = useState({});
  const [id, setId] = useState(null);

  const { savePatient, patient } = usePatients();

  useEffect(() => {
    if (patient?.name) {
      setName(patient.name),
        setDate(patient.date),
        setEmail(patient.email),
        setOwner(patient.owner),
        setSymptoms(patient.symptoms),
        setId(patient._id);
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, date, email, symptoms].includes("")) {
      setAlert({ msg: "All fields are required", error: true });
      return;
    }

    savePatient({ name, owner, date, email, symptoms, id });
    setAlert({
      msg: "Saved successfully",
    });

    setName(""),
      setDate(""),
      setEmail(""),
      setOwner(""),
      setSymptoms(""),
      setId("");
  };

  const { msg } = alert;
  return (
    <>
      <h2 className="text-teal-600 text-3xl text-center font-bold">
        Patients Manager
      </h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Add your patients and {""}
        <span className="text-indigo-600 font-bold"> manage them.</span>
      </p>

      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-700 uppercase font-bold">
            Name your pet
          </label>
          <input
            id="name"
            type="text"
            placeholder="name your pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="text-gray-700 uppercase font-bold">
            Name owner
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Email owner
          </label>
          <input
            id="email"
            type="email"
            placeholder="Owner email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-gray-700 uppercase font-bold">
            Discharge Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Describe the symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={id ? "Save" : "Add patient"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
        />
      </form>

      {msg && <Alert alert={alert} />}
    </>
  );
};

export default FormAdmin;
