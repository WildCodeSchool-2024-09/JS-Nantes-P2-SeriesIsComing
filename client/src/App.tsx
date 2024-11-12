import "./App.css";
import "./components/Navbar.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div id="main-div">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
