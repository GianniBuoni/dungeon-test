import React from "react";
import Buttons from "./Buttons";

// GET data from db
// Display data form db as {text}
// Change mapping depending on place table in db
// Mutate data in db when pressed

//Monster data is only mutated client side.
//Character data is mutated on client and server side!

const ButtonHub = () => {
  const map = ["Attack", "Dodge", "Run"];
  return (
    <div className="flex flex-row space-x-1">
      {map.map((thing) => (
        <Buttons key={thing}>{thing}</Buttons>
      ))}
    </div>
  );
};

export default ButtonHub;
