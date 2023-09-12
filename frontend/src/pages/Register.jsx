import { useState } from "react";
import { Link } from "react-router-dom";
import clientAxios from "../api/axios";
import Alert from "../components/Alert";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password, repeatPassword].includes("")) {
      setAlert({ msg: "All fields are required", error: true });
      return;
    }

    if (password !== repeatPassword) {
      setAlert({ msg: "The passwords are not the same", error: true });
      return;
    }

    if (password.length < 6) {
      setAlert({ msg: "Password min 6 characters", error: true });
      return;
    }

    setAlert({});

    //Creating an user in API
    try {
      await clientAxios.post("/vets/register", { name, email, password });
      setAlert({
        msg: 'Created Successfully, check your email',
        error: false
    })
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alert;
  return (
    <>
      <div>
        <h2 className="text-indigo-600 font-black text-5xl">
          Create your Account and Manage {""}
          <span className="text-black">your Patients</span>
        </h2>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <span className="uppercase text-gray-600 block text-xl font-bold">
              Name
            </span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <span className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5">
            <span className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <span className="uppercase text-gray-600 block text-xl font-bold">
              Repeat Password
            </span>
            <input
              type="password"
              placeholder="Repeat Password"
              name="Repeat Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              autoComplete="off"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Create Account"
            name="submit"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/">
            Do you already have an account?{" "}
            <span className="text-blue-600">Login</span>
          </Link>
          <Link
            className="block text-center my-5 text-green-500"
            to="/forgot-pass"
          >
            Forgot my password
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Register