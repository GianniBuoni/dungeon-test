"use server";
import { eq } from "drizzle-orm";
import { db } from "..";
import { me, places, weapons } from "../schema";

export const getMe = async () => {
  const data = await db
    .select()
    .from(me)
    .innerJoin(weapons, eq(me.equippedId, weapons.id));
  return data[0];
};

export const goPlaces = async () => {
  const data = await db.select().from(places).where(eq(places.isActive, false));
  return data;
};

export const activePlace = async () => {
  const data = await db.select().from(places).where(eq(places.isActive, true));
  return data[0];
};
