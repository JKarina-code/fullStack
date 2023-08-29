import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import { Link, useParams } from "react-router-dom";
import clientAxios from "../api/axios";

export const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const [validToken, setValidToken] = useState(false);
  const [passModified, setPassModified] = useState(false);
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const checktoken = async () => {
      try {
        const url = `/forgot-pass/${token}`;
        const { data } = await clientAxios(url);
        setValidToken(true);
        setAlert({
          msg: data.msg,
        });
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    checktoken();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlert({ msg: "Password min 6 characters", error: true });
      return;
    }

    try {
      const url = `/forgot-pass/${token}`;
      const { data } = await clientAxios.post(url, { password });

      setAlert({ msg: data.msg });

      setPassModified(true);
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
        <h1 className="text-indigo-600 font-black text-6xl">
          Reset your password and do not lose access to{""}
          <span className="text-black"> your Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}

        {validToken && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Your new Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Save new Password"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto "
              />
            </form>

            {passModified && (
              <Link className="block text-center my-5 text-blue-600" to="/">
                Login
              </Link>
            )}
          </>
        )}
      </div>
    </>
  );
};
