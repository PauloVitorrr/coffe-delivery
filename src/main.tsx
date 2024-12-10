import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Home from "./pages/Home/index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Success } from "./pages/Success/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        // element: <Cart />,
      },
      {
        // path: "/order/:orderId/success",
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
