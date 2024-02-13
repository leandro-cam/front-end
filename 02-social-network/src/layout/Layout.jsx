import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";

export default function Layout() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
