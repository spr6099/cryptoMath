import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const TeacherLayout = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  if (user?.status !== "teacher") return <Navigate to="/" replace />;
  return (
    <>
      <Outlet/>
    </>
  );
};
