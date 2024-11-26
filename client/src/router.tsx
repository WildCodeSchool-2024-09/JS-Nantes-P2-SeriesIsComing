import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Series from "./pages/Series";

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
        path: "series/:serieId/detail/:charId",
        element: <Detail />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:4000/api/series/${params.serieId}/character/${params.charId}`,
          );
          const jsonReponse = await response.json();
          return jsonReponse;
        },
      },
    ],
  },
]);

export default router;
