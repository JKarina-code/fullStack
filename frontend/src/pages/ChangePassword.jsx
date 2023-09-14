import Alert from "../components/Alert";
import AdminNav from "../components/AdminNav";

const ChangePassword = () => {
  const handleSubmit = {};
  const { msg } = alert;
  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Change Password</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {""}
        <span className="text-indigo-600 font-bold">Password here</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {msg && <Alert alert={alert} />}

          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <span className="uppercase font-bold text-gray-600">
                Current Password
              </span>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="current_pwd"
                autoComplete="off"
                placeholder="Write your current password"
              />
            </div>

            <div className="my-3">
              <span className="uppercase font-bold text-gray-600">
                New Password
              </span>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="new_pwd"
                autoComplete="off"
                placeholder="Write your new password"
              />
            </div>

            <input
              type="submit"
              value="Update Password"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
