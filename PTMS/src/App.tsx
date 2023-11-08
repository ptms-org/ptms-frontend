import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Layout } from "./features/Layout/Layout";
import { pathsURL } from "./common/paths";

const router = createBrowserRouter([
  {
    path: pathsURL.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <>Home</>
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
