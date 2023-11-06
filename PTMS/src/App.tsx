import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { pathsURL } from "./common/paths";
import { Layout } from "./features/Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={pathsURL.home} element={<Layout />}>
      <Route path={pathsURL.createProject} element={<></>} />
      <Route path={pathsURL.user} element={<></>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
