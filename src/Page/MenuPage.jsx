import React from "react";
import { FaLeaf } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

const MenuPage = () => {
  return (
    <>
      {/* user logo  */}
      <div className="flex justify-between items-center p-3">
        <div className="rounded-lg bg-slate-500 p-2 flex justify-center items-center flex-wrap">
          <img src="" alt="Profile" />
          <br />
          <p className="text-sm "> capeloise324@gmail.com</p>
        </div>

        {/* THEME CONTROL  */}
        {/* <div className=" hover:text-yellow-300 cursor-pointer bg-slate-600 rounded-full p-2">
          <FaLightbulb />
        </div> */}

        <ThemeToggle />
      </div>

      {/* settings  */}

      <div className=" h-full">
        <h3 className="bg-slate-500 text-center p-2 text-3xl text-gray-300 uppercase">
          Account Settings
        </h3>

        {/* profile settings  */}
        <div className="m-2">
          <form>
            {/* email  */}
            <label className="input input-bordered flex items-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow "
                placeholder="Email"
                name="email"
              />
            </label>{" "}
            <br />
            {/* password  */}
            <label className="input input-bordered flex items-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow "
                placeholder="Password"
                name="password"
              />
            </label>{" "}
          </form>
        </div>

        <div className=" flex">
          {/* update user info  */}

          <div className="btn btn-outline bg-slate-500 m-4 hover:text-gray-500 hover:rounded-lg hover:bg-slate-800">
            <FaLeaf />
            Update
          </div>

          {/* for logout  */}

          <div className="btn btn-outline bg-slate-500 m-4 hover:text-gray-500 hover:rounded-lg hover:bg-slate-800">
            <FaLeaf />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
