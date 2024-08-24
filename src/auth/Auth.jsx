import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  // collect data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  //   change auth mode

  const [login, setLogin] = useState(false);

  //   getInputValue

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/val");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <form onSubmit={handleSubmit}>
            <h2 className="card-title">{login ? "Login" : "Register"} </h2>
            <br />
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
              />
            </label>{" "}
            <br />
            <div className="card-actions justify-center m-4">
              <button className="btn btn-primary">
                {login ? "Login" : "Register"}
              </button>
            </div>
          </form>
          <p>
            <input
              className="cursor-pointer"
              type="submit"
              value={`${
                login ? "Create new account" : "Login an existing account"
              }`}
              onClick={() => {
                setLogin(!login);
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
