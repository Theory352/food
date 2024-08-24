import React from "react";

const Card = ({ name, description, calories }) => {
  return (
    <>
      {/* content card  */}

      <div className="container-fluid h-screen">
        <div className="flex flex-wrap justify-around gap-2">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">{calories}</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
