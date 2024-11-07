import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <h1>Voici App</h1>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
