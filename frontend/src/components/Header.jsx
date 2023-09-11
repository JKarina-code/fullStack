import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { signOff } = useAuth();
  return (
    <header className="px-10 py-5 bg-teal-400">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center lg:flex-row">
          {" "}
          <img src={Logo} style={{ width: "100px" }} alt="logo" />
        </div>

        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0  ">
          <Link to="/admin" className="text-indigo-600 text-2xl  font-bold">
            Patients
          </Link>
          <Link
            to="/admin/profile"
            className="text-indigo-600 text-2xl font-bold"
          >
            {" "}
            Profile{" "}
          </Link>

          <button
            type="button"
            className="text-indigo-600 text-2xl  font-bold"
            onClick={signOff}
          >
            Sign off
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
