import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoutes = () =>{
    const {isLogin} = useContext(AuthContext);
    return isLogin ? <Outlet /> : <Navigate to="/login"/>;
};


export default ProtectedRoutes;