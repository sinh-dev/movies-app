import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import WelcomePage from "../pages/WelcomePage";
import LoginForm from "../components/LoginForm";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginForm />} />

       {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
