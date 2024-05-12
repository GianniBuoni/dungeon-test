import { goPlaces } from "@/db/server-actions/getActions";
import PlaceButton from "./PlaceButton";

const Places = async () => {
  const places = await goPlaces();
  return (
    <div className="space-x-1">
      {places.map((place) => (
        <PlaceButton key={place.id} id={place.id}>
          {place.name}
        </PlaceButton>
      ))}
    </div>
  );
};

export default Places;
export const revalidate = 10;
