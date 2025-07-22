import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Dashboard/Main";
import GameDetails from "../components/GameDetails";
import Layout from "../components/Layout";
import ErrorPage from "../ErrorPage";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/games",
        children: [
          {
            path: ":slug",
            element: <GameDetails />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default route;
