import usePatients from "../hooks/usePatients";

const Patient = ({ patient }) => {
  const { email, name, owner, symptoms, date, _id } = patient;

  const formartDate = (date) => {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(newDate);
  };
  const { setEdition , deletePatient} = usePatients();
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Name : {""}
        <span className="font-normal normal-case text-black">{name}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Owner: {""}
        <span className="font-normal normal-case text-black">{owner}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Email: {""}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Date: {""}
        <span className="font-normal normal-case text-black">
          {formartDate(date)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Symptoms: {""}
        <span className="font-normal normal-case text-black">{symptoms}</span>
      </p>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 my-2 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
          onClick={() => setEdition(patient)}
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 my-2 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
        onClick = {() => deletePatient(_id)}
        
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
