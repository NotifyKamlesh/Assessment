// Layout.jsx

// import { Outlet } from "react-router-dom";
import Sidenav from "../sidenav/Sidenav";
import TopNav from "../topnav/TopNav";
import Home from "../../pages/home/Home";
// import Nav from "./CommonComponent/Nav";

const Layout = () => {
  return (
    <main className="flex justify-between items-start">
        <Sidenav />
      <div className="w-full flex flex-col justify-between items-center ">
        <TopNav />
        {/* <Outlet /> */}
        <Home/>
      </div>
    </main>
  );
};

export default Layout;
