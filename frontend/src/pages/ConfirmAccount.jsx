import { useEffect, useState } from "react";
import clientAxios from "../api/axios";
import { useParams, Link } from "react-router-dom";
import Alert from "../components/Alert";

export const ConfirmAccount = () => {
  const [accountConfirm, setAccountConfirm] = useState(false);
  const [loading, setLoading] = useState(true);

  const [alert, setAlert] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const sustainAccount = async () => {
      try {
        const url = `/confirm/${id}`;
        const { data } = await clientAxios(url);
        setAccountConfirm(true);

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

    setLoading(false);
    sustainAccount();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-indigo-600 font-black text-5xl">
          Confirm your account and start managing {""}
          <span className="text-black">your Patients</span>
        </h2>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!loading && <Alert alert={alert} />}

        {accountConfirm && (
          <Link className="block text-center my-5 text-blue-600" to="/">
            Login
          </Link>
        )}
      </div>
    </>
  );
};
