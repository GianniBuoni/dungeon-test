import { activePlace } from "@/db/server-actions/getActions";
import { myCard } from "../_styles/myClasses";

const TextBlock = async () => {
  const currentPlace = await activePlace();

  return <div className={`${myCard} bg-base-300`}>{currentPlace.name}</div>;
};

export default TextBlock;
export const revalidate = 0;
