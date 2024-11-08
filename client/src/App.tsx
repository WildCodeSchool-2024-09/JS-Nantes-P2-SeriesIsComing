import "./App.css";
import ContactUs from "./pages/ContactUs";
import "./components/Navbar.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
<<<<<<< HEAD
      <ContactUs />
=======
      <ContactUs/>
      <h1>Voici App</h1>
      <NavBar />
      <Outlet />
      <Footer />
>>>>>>> dbf8a6f0e8d5b576322c4c9c3086b6bf752acd59
    </>
  );
}

export default App;
