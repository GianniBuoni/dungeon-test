"use server";
import { eq } from "drizzle-orm";
import { db } from "..";
import { me, places } from "../schema";
import { activePlace, getMe } from "./getActions";

export const changePlace = async (id: number) => {
  await db
    .update(places)
    .set({
      isActive: false,
    })
    .where(eq(places.id, (await activePlace()).id));
  await db
    .update(places)
    .set({
      isActive: true,
    })
    .where(eq(places.id, id));
};

// STORE MUTATIONS
export const buyHealth = async () => {
  const currentMe = await getMe();
  if (currentMe.me.gold < 10) {
    alert("You don't have enough gold!");
  } else {
    await db
      .update(me)
      .set({
        hp: currentMe.me.hp + 30,
      })
      .where(eq(me.id, currentMe.me.id));
  }
};
