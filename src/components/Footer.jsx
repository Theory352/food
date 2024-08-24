import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCalendar, FaCcDiscover } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="btm-nav">
        <button className="bg-slate-500 text-gray-100">
          <Link to="/">
            <FaCalendar />{" "}
          </Link>
          <span className="btm-nav-label">
            {" "}
            <Link to="/">Planner</Link>
          </span>
        </button>
        <button className=" bg-slate-500 text-gray-100">
          <Link to="/discover">
            <FaCcDiscover />
          </Link>
          <span className="btm-nav-label">
            <Link to="/discover">Discover</Link>
          </span>
        </button>

        <button className="bg-slate-500  text-gray-100">
          <Link to="/menu">
            {" "}
            <FaBars />
          </Link>
          <span className="btm-nav-label">
            {" "}
            <Link to="/menu">Menu</Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
