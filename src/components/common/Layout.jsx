
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <Header />
    </header>
    <main className=" flex-1 mt-8 py-4 ">
      <Outlet />
    </main>
  </div>
  );
}

export default Layout;