import React from "react";

const Card = ({ name, description, calories }) => {
  const text = description.slice(0, 50) + " " + "...";

  return (
    <>
      {/* content card  */}

      <div>
        <div className="flex flex-wrap justify-around gap-2 m-3">
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{text}</p>
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
