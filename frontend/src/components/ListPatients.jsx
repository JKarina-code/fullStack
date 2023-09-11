import usePatients from "../hooks/usePatients";
import Patient from "./Patient";
const ListPatients = () => {
  const { patients } = usePatients();

  return (
    <>
      {patients.length ? (
        <>
          <h2 className="text-teal-600 text-3xl text-center font-bold">
            Patients List{" "}
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Manage your {""}
            <span className="text-indigo-600 font-bold">
              Patients and Appointments
            </span>
          </p>
          {patients.map((patient) => (
            <Patient key={patient._id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          {" "}
          <h2 className="text-teal-600 text-3xl text-center font-bold">
            There is not patients{" "}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Start adding patients {""}
            <span className="text-indigo-600 font-bold">
              and they will appear in this place.
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListPatients;
