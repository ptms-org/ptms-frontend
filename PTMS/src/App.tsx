import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Layout } from "./features/layout/Layout";
import { pathsURL } from "./common/paths";
import { ProjectSite } from "./features/projectSite/ProjectSite";

const router = createBrowserRouter([
  {
    path: pathsURL.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProjectSite/>
      },
      {
        path: pathsURL.createProject,
        element: <>Create Project</>
      },
      {
        path: pathsURL.user,
        element: <>User</>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
