import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-full bg-txtColor text-white flex flex-col items-center justify-center h-[20vh]">
        <Link to="/" className="logo krona text-2xl">
          Wavey
        </Link>
        <div className="w-full h-[2px] bg-yellow mt-4"></div>
        <h2 className="mt-4">copyright © Wavey | All rights reserved</h2>
      </div>
    </>
  );
}

export default Footer;
