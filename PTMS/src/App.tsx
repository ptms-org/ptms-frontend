import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Layout } from "./features/Layout/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <>Home</>
      },
      {
        path: 'create-project',
        element: <>Create Project</>
      },
      {
        path: 'user',
        element: <>User</>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
