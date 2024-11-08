import "./App.css";
import ContactUs from "./pages/ContactUs";
import "./components/Navbar.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <ContactUs />
      <h1>Voici App</h1>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
