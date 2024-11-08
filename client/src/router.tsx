import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Series from "./pages/Series";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/series/:id",
        element: <Series />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
