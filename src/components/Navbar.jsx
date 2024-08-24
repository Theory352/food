import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between top-0 sticky">
        <a className=" bg-slate-600 text-xl">
          <button className="btn rounded-none ">Day</button>
          <button className="btn rounded-none ">Week</button>
        </a>

        <div>
          <button className="btn rounded-lg">
            <FaPencilAlt /> Edit Day
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
