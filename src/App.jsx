import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext";
import { AuthProvider } from "./contexts/AuthContext"; 
import NavBar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes"; 

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <AppRoutes />
        </main>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;
