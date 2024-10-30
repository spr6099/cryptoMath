import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../admin/partials/Header";

export const AdminLayout = () => {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
    if (admin?.name !== "admin") return <Navigate to="/" replace />;
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
    
};
