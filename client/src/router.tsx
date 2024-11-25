import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
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
        element: <ContactUs />,
      },
      {
        path: "Detail/:id",
        element: <Detail />,
        // loader :({ params }) =>
        //   fetch()
      },
    ],
  },
]);

export default router;
