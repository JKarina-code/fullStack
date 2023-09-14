import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import AdminRoute from "./layout/AdminRoute";
import AdminPatients from "./pages/AdminPatients";
import ConfirmAccount from "./pages/ConfirmAccount";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthProvider";
import { PatientsProvider } from "./context/PatientsProvider";

import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PatientsProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-pass" element={<ForgotPassword />} />
              <Route path="/forgot-pass/:token" element={<NewPassword />} />
              <Route path="/confirm/:id" element={<ConfirmAccount />} />
            </Route>

            <Route path="/admin" element={<AdminRoute />}>
              <Route index element={<AdminPatients />} />
              <Route path="profile" element={<EditProfile />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
          </Routes>
        </PatientsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
