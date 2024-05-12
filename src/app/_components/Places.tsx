import { goPlaces } from "@/db/server-actions/getActions";
import { changePlace } from "@/db/server-actions/postActions";
import Button from "./Button";

const Places = async () => {
  const places = await goPlaces();
  return (
    <div className="space-x-1">
      {places.map((place) => (
        <Button key={place.id} id={place.id} funct={changePlace}>
          {place.name}
        </Button>
      ))}
    </div>
  );
};

export default Places;
export const revalidate = 10;
