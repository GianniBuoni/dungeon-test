import { db } from "@/db";
import { me, weapons } from "@/db/schema";
import { eq } from "drizzle-orm";
import React from "react";
import { capFirst } from "../_lib/utils";

const StatsRibbon = async () => {
  const data = await db
    .select()
    .from(me)
    .limit(1)
    .innerJoin(weapons, eq(me.equipped, weapons.id));

  const stats = data[0].me;
  const weapon = capFirst(data[0].weapons.name);

  return (
    <div className="flex space-x-5">
      <p>XP: {stats.xp} </p>
      <p>HP: {stats.hp}</p>
      <p>Gold: {stats.gold}</p>
      <p>Current Weapon: {weapon}</p>
    </div>
  );
};

export default StatsRibbon;
