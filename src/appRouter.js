import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Cart from "./components/Cart";
import ErrorElement from "./components/ErrorElement";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
