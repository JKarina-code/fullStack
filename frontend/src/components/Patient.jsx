const Patient = ({ patient }) => {
  const { email, name, owner, symptoms, date, _id } = patient;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-indigo-700 my-2">
        Name: {""}
        <span className="font-normal normal-case text-black">{name}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Owner: {""}
        <span className="font-normal normal-case text-black">{owner}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Email : {""}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Date: {""}
        <span className="font-normal normal-case text-black">{date}</span>
      </p>
      <p className="font-bold uppercase text-indigo-700 my-2">
        Symptoms: {""}
        <span className="font-normal normal-case text-black">{symptoms}</span>
      </p>

      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold  rounded-lg"
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold  rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
