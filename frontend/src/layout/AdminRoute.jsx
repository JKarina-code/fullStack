import { Outlet } from "react-router-dom";

export const AdminRoute = () => {
  return (
    <>
      <main className="container mx-auto mt-10">
        <Outlet />
      </main>
    </>
  );
};
