import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <nav className="mx-5 flex gap-5">
      <Link to="/admin/profile" className="font-bold  text-blue-700">
        Profile
      </Link>
      /
      <Link to="/admin/change-password" className="font-bold  text-blue-700">
        Change Password
      </Link>
    </nav>
  );
};

export default AdminNav;
