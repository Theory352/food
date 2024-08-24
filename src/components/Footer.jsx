import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCalendar, FaCcDiscover } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" mt-20">
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
            <label htmlFor="menu" className="drawer-button ">
              <FaBars />
            </label>
            <span className="btm-nav-label">
              <div className="drawer drawer-end">
                <input id="menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  <label htmlFor="menu" className="drawer-button ">
                    Menu
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="menu"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 z-50 text-base-content min-h-full w-80 p-3">
                    {/* Sidebar content here */}
                    <div className="flex flex-col justify-end items-center  h-screen p-3">
                      <li>
                        <Link to='/menu'>Account</Link>
                      </li>
                      <li>
                        <Link to="/discover">Discover</Link>
                      </li>
                      <li>
                        <Link to="/">Planner</Link>
                      </li>
                      <li>
                        <Link to="/">Saved Plans</Link>
                      </li>
                      <li>
                        <Link to="/">Custom Rescipies</Link>
                      </li>
                      <li>
                        <Link to="/">Logout</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* drawer  */}
    </>
  );
};

export default Footer;
