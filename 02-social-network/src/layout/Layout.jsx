import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import ChatBox from "../pages/chat-box/ChatBox";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";

import Nav from "../components/nav/Nav";
import LeftBar from "../components/left-bar/LeftBar";
import RightBar from "../components/right-bar/RightBar";

export default function Layout() {
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet />
          </div>
          <RightBar />
        </main>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chat-box/:id",
          element: <ChatBox />,
        },
      ],
    },
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
