import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from "react-router-dom";

import "./App.css";
import { Navigation } from "./common/navigation/Navigation";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={ <Navigation />}>
        <Route path="/Home" element={<></>} />
        <Route path="/CreateProject" element={<></>} />
        <Route path="/User" element={<></>} />
      </Route>
  ));

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

