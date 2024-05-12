import { activePlace } from "@/db/server-actions/getActions";
import { myCard } from "../_styles/myClasses";

const TextBlock = async () => {
  const currentPlace = await activePlace();

  const textMap: { text: string; actions?: () => void[] }[] = [
    { text: "Secret location: WELCOME to DUNGEON DIVE!!" },
    {
      text: "You are in the Town Square. There's a shop where you can heal and equip yourself, some scary caves, OR you can go fight the Dragon.",
    },
    {
      text: "The store has many items for sale! The merchant greets you cordially.",
    },
    {
      text: "You enter the caves — there are many monsters! Which one do you attack? ",
    },
    {
      text: "Ahhhhhh, a dragon! Will you fight!? Will you prevail!?",
    },
  ];

  return (
    <div className={`${myCard} bg-base-300`}>
      {textMap[currentPlace.id].text}
    </div>
  );
};

export default TextBlock;
export const revalidate = 0;
