import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="max-w-[1440px] mx-auto px-3 py-4">
          <Link to="/">
            <h1 className="text-3xl font-bold">MovieHub</h1>
          </Link>
        </div>
      </header>
      <main>
        <div className="max-w-[1440px] mx-auto px-3 py-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
