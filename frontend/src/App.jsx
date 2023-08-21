import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import {
  Login,
  ConfirmAccount,
  ForgotPassword,
  Register,
  NewPassword,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path= "/register"  element={<Register />} />
          <Route path= "/forgot-password" element={<ForgotPassword />} />
          <Route path= "/update-password" element={<NewPassword />} />
          <Route path= "/check-account/:id" element={<ConfirmAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
