import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Dashboard/Main";
import GameDetails from "../components/GameDetails";
import App from "../App";
import Layout from "../components/Layout";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/games",
        children: [
          {
            path: ":id",
            element: <GameDetails />,
          },
        ],
      },
    ],
  },
]);

export default route;
