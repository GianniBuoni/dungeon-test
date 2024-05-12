"use server";
import { eq } from "drizzle-orm";
import { db } from "..";
import { me, weapons } from "../schema";

export const getMe = async () => {
  const data = await db
    .select()
    .from(me)
    .innerJoin(weapons, eq(me.equippedId, weapons.id));
  return data[0];
};
