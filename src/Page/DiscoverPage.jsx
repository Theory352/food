import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../components/Card";
import axios from "axios";

const DiscoverPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch("//dummyjson.com/test")
          .then((res) => res.json())
          .then(console.log);

        const response = await axios.get("");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);
  console.log(data);

  return (
    <>
      <div className="top-0 sticky z-10 ">
        <div className="navbar bg-base-100 flex justify-between">
          <button className="w-25 btn btn-outline text-slate-600 rounded-md p-2">
            {" "}
            <FaFilter /> <span>Filter</span>
          </button>

          <div className="join rounded-lg join-horizontal">
            <button className="btn join-item hover:bg-slate-500 hover:text-slate-900">
              My Food
            </button>
            <button className="btn join-item hover:bg-slate-500 hover:text-slate-900">
              My Collections
            </button>
          </div>

          <a className=" bg-slate-600 text-xl">
            <button className="btn rounded-none hover:bg-slate-500  hover:text-slate-900">
              Day
            </button>
            <button className="btn rounded-none hover:bg-slate-500 hover:text-slate-900">
              Week
            </button>
          </a>
        </div>
      </div>

      {/* search button  */}
      <div className="w-3/5 m-2">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {data?.map((food) => (
        <Card
          key={food.id}
          name={food.name}
          description={food.description}
          calories={food.calories}
        />
      ))}
    </>
  );
};

export default DiscoverPage;
