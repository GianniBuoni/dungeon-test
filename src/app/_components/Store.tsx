import React from "react";
import TextBlock from "./TextBlock";

//Actions:
//Buy health, Buy Weapon, Sell Weapon

const Store = () => {
  return (
    <div>
      <TextBlock>
        You are in the general goods store. The merchant greets you coridally!
      </TextBlock>
      <div>
        <button>Buy Health</button>
        <button>Buy Weapon</button>
        <button>Sell Weapon</button>
      </div>
    </div>
  );
};

export default Store;
