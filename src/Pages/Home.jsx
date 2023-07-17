import React from "react";
import { Outlet } from "react-router";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="flex-col relative h-full">
      <Navigation />

      <div className="md:flex justify-end flex-row-reverse ">
        <div className="bg-secondaryLight dark:bg-nightDark md:w-full ">
          <Outlet />
        </div>

        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
