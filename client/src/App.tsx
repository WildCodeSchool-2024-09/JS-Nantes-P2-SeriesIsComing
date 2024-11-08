import NavBar from "./components/NavBar";
import "./App.css";
import "./components/Navbar.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
