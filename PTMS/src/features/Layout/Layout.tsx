import { Outlet } from "react-router-dom";
import { Header } from "../../common/Navigation/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
