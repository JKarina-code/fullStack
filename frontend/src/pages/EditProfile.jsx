import { useState, useEffect } from "react";
import Alert from "../components/Alert";
import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth";

const EditProfile = () => {
  const { auth, updateProfile } = useAuth();
  const [profile, setProfile] = useState({});
  const [alert, setAlert] = useState({
    name: "",
    web: "",
    cellphone: "",
    email: "",
  });

  useEffect(() => {
    setProfile(auth);
  }, [auth]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = profile;

    if ([name, email].includes("")) {
      setAlert({ msg: "Name and email are required", error: true });
      return;
    }

    const result = await updateProfile(profile);
    setAlert(result);
  };

  const { msg } = alert;
  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Edit Profile</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {""}
        <span className="text-indigo-600 font-bold">Information here</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alert alert={alert} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <span className="uppercase font-bold text-gray-600">Name</span>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="name"
                autoComplete="off"
                value={profile.name || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="my-3">
              <span className="uppercase font-bold text-gray-600">Website</span>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="web"
                autoComplete="off"
                value={profile.web || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="my-3">
              <span className="uppercase font-bold text-gray-600">
                Cellphone
              </span>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="cellphone"
                autoComplete="off"
                value={profile.cellphone || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="my-3">
              <span className="uppercase font-bold text-gray-600">Email</span>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="email"
                autoComplete="off"
                value={profile.email || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <input
              type="submit"
              value="Save Changes"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
