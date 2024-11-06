import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Voici App</h1>
      <Outlet />
    </>
  );
}

export default App;
