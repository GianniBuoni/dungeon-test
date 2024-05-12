import { getMe } from "@/db/serverActions";
import { capFirst } from "../_lib/utils";
import { myCard } from "../_styles/clsx";

const StatsRibbon = async () => {
  const data = await getMe();

  const stats = data.me;
  const weapon = capFirst(data.weapons.name);

  return (
    <div className={`flex space-x-5 font-extrabold ${myCard}`}>
      <p>XP: {stats.xp} </p>
      <p>HP: {stats.hp}</p>
      <p>Gold: {stats.gold}</p>
      <p>Current Weapon: {weapon}</p>
    </div>
  );
};

export default StatsRibbon;
