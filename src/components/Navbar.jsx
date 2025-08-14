import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../css/Navbar.css";

function NavBar() {
  const { isLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>

      {isLogin && (
        <>
          <div className="navbar-links">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </div>

          <div className="navbar-auth">
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;
