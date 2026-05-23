import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-72px)]">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-900 bg-zinc-950">
          <Sidebar />
        </aside>

        {/* Dynamic Page */}
        <section className="flex-1 overflow-y-auto bg-black p-6">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default MainLayout;
