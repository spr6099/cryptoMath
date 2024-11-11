import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../students/partials/Header";
import Footer from "../students/partials/Footer";

export const StudentLayout = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  if (user?.status !== "student") return <Navigate to="/" replace />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
