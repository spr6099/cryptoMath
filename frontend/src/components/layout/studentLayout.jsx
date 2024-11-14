import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const StudentLayout = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  if (user?.status !== "student") return <Navigate to="/" replace />;
  return (
    <>
      <Outlet />
    </>
  );
};