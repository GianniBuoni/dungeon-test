import React from "react";
import Buttons from "./NavButtons";
import { getPlaces } from "@/db/serverActions";

const ButtonHub = async () => {
  // GET data from db, tis parses which places are not active.
  const whereMe = await getPlaces();

  // Pass the Place name as {children} for the buttons
  // Pass the id of each place as a prop.

  return (
    <div className="flex flex-row space-x-1">
      {whereMe.map((place) => (
        <Buttons key={place.id} id={place.id}>
          Go to {place.name}
        </Buttons>
      ))}
    </div>
  );
};

export default ButtonHub;
export const revalidate = 20;
