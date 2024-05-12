"use server";
import { eq } from "drizzle-orm";
import { db } from ".";
import { me, places, weapons } from "./schema";

export const getMe = async () => {
  const data = await db
    .select()
    .from(me)
    .limit(1)
    .innerJoin(weapons, eq(me.equipped, weapons.id));
  return data[0];
};

export const getPlaces = async () => {
  const data = await db.select().from(places).where(eq(places.isActive, false));
  return data;
};

export const addHealth = async () => {
  const currentHp = await db.select({ value: me.hp }).from(me);
  if (currentHp[0].value <= 100) return null;
  const newHp = currentHp[0].value + 10;
  await db
    .update(me)
    .set({
      hp: newHp,
    })
    .where(eq(me.id, 1));
};

export const buyWeapon = async () => {
  const nextWeapon = await db
    .select()
    .from(weapons)
    .where(eq(weapons.inInventory, false))
    .limit(1);
  await db
    .update(weapons)
    .set({
      inInventory: true,
    })
    .where(eq(weapons.id, nextWeapon[0].id));
};

export const goPlace = async (id: number) => {
  // Find current place
  const current = await db
    .select()
    .from(places)
    .where(eq(places.isActive, true));
  // Change current place to inactive
  await db
    .update(places)
    .set({
      isActive: false,
    })
    .where(eq(places.id, current[0].id));
  // New place is set active via an id passes as a param
  await db
    .update(places)
    .set({
      isActive: true,
    })
    .where(eq(places.id, id));
};
