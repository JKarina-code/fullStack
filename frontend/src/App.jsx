import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout, AdminRoute } from "./layout";
import {
  Login,
  ConfirmAccount,
  ForgotPassword,
  Register,
  NewPassword,
  AdminPatients,
} from "./pages";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
