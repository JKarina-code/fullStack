import { Link } from "react-router-dom";

export const Login = () => {
  const handleSubmit = () => {
    console.log("form");
  };
  return (
    <>
      <div>
        <h2 className="text-indigo-600 font-black text-5xl">
          Login and Manage your {""}
          <span className="text-black"> Patients</span>
        </h2>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/register">
            You do not have an account?{" "}
            <span className="text-blue-600">Sign up</span>
          </Link>
          <Link
            className="block text-center my-5 text-green-500"
            to="/forgot-password"
          >
            Forgot my password
          </Link>
        </nav>
      </div>
    </>
  );
};
