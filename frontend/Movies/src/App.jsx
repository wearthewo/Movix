import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddFavorite from "./components/AddFavorite";
import "./css/NavBar.css";
import Logout from "./components/Logout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { FavoritesProvider } from "./context/Favorites";

function App() {
  return (
    <FavoritesProvider>
      <main className="main-content">
        <Routes>
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoutes>
                {" "}
                <Home />{" "}
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<Login />} />
          <Route
            path="/addfavorites"
            element={
              <ProtectedRoutes>
                {" "}
                <AddFavorite />{" "}
              </ProtectedRoutes>
            }
          />
        </Routes>
      </main>
    </FavoritesProvider>
  );
}

export default App;

/*  <Router>
      <AuthProvider>
        {" "}
        <Routes>
          <Route element={<PrivateRoutes />}>
            {" "}
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </AuthProvider>
    </Router>*/

/* import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthProvider";*/
