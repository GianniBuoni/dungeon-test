import { activePlace } from "@/db/server-actions/getActions";
import { myCard } from "../_styles/myClasses";
import {
  buyHealth,
  buyWeapon,
  sellWeapon,
} from "@/db/server-actions/postActions";
import TransactionButton from "./TransactionButton";

const TextBlock = async () => {
  const currentPlace = await activePlace();

  const textMap: {
    text: string;
    buttons?: {
      buttonText: string;
      goldNeeded?: number;
      action: () => Promise<void>;
    }[];
  }[] = [
    { text: "Secret location: WELCOME to DUNGEON DIVE!!" },
    {
      text: "You are in the Town Square. There's a shop where you can heal and equip yourself, some scary caves, OR you can go fight the Dragon.",
    },
    {
      text: "The store has many items for sale! The merchant greets you cordially.",
      buttons: [
        { buttonText: "Buy Health (10g)", action: buyHealth, goldNeeded: 10 },
        { buttonText: "Buy Weapon (30g)", action: buyWeapon, goldNeeded: 30 },
        { buttonText: "Sell Weapon (15g)", action: sellWeapon },
      ],
    },
    {
      text: "You enter the caves — there are many monsters! Which one do you attack?",
    },
    {
      text: "Ahhhhhh, a dragon! Will you fight!? Will you prevail!?",
    },
  ];

  return (
    <div className={`${myCard} bg-base-300 space-y-2`}>
      <p>{textMap[currentPlace.id].text}</p>
      <div className="flex space-x-3">
        {textMap[currentPlace.id].buttons?.map((button) => (
          <TransactionButton
            goldNeeded={button.goldNeeded!}
            key={button.buttonText}
            action={button.action}
          >
            {button.buttonText}
          </TransactionButton>
        ))}
      </div>
    </div>
  );
};

export default TextBlock;
export const revalidate = 0;
