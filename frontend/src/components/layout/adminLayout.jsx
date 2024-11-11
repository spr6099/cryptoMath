import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AdminLayout = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  if (user !== "admin") return <Navigate to="/" replace />;
  return (
    <>
      <Outlet />
    </>
  );
};
