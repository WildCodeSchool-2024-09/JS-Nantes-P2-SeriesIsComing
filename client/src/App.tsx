import "./App.css";
import "./components/Navbar.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <h1>Voici App</h1>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
