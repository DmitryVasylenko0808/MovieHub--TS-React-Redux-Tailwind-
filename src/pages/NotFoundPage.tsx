import React from "react";
import { Link } from "react-router-dom";

import SadFace from "../assets/icons/sad-face.svg";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <SadFace width={100} height={100} fill="#525252" />
      <p className="text-2xl text-center text-neutral-600">
        Oops... Something went wrong. Page is not found.
        <br />
        Click{" "}
        <Link to="/" className="text-indigo-600 hover:underline">
          Home
        </Link>{" "}
        to move back
      </p>
    </div>
  );
};

export default NotFoundPage;
