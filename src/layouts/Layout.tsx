import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";

const Layout = () => {
  return (
    <>
      <header>
        <div className="max-w-[1440px] mx-auto px-3 flex items-center gap-x-8">
          <Link to="/">
            <h1 className="text-3xl font-bold">MovieHub</h1>
          </Link>
          <NavBar />
        </div>
      </header>
      <main>
        <div className="max-w-[1440px] mx-auto px-3 py-4">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
