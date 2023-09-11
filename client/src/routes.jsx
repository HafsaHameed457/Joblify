import { Navigate, Outlet } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Error from "./pages/Error";
import Layout from "./pages/Layout/Layout";
const routes = (currentUser = "") => [
  { path: "*", element: <Navigate to="/404" /> },
  {
    path: "/",
    element: !currentUser ? <Layout /> : <Navigate to="/dashboard" />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/404",
    element: <Error />,
  },
];

export default routes;
