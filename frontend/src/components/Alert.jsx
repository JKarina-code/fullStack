const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error ? "from-red-400 to-red-500" : "from-green-400 to-green-600"
      } bg-gradient-to-br text-center p-3 rounded-xl  text-white font-bold text-sm mb-10`}
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
