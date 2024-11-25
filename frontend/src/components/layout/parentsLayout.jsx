import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ParentsLayout = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("parents")));
  if (user?.status !== "parent") return <Navigate to="/" replace />;
  return (
    <>
      <Outlet />    
    </>
  );
};
