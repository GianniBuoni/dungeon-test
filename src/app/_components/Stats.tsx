import { capName } from "@/app/_lib/utils";
import { myCard } from "@/app/_styles/myClasses";
import { getMe } from "@/db/server-actions/getActions";

const Stats = async () => {
  const currentStats = await getMe();

  return (
    <div className={`${myCard} flex space-x-5 px-5 p-3 bg-base-300`}>
      <p>XP: {currentStats.me.xp}</p>
      <p>HP: {currentStats.me.hp}</p>
      <p>Gold: {currentStats.me.gold}</p>
      <p>Equipped Weapon: {capName(currentStats.weapons.name)}</p>
    </div>
  );
};

export default Stats;
