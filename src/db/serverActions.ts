"use server";
import { eq, ne } from "drizzle-orm";
import { db } from ".";
import { me, places, weapons } from "./schema";

// GENERAL SELECT QUERIES
export const getMe = async () => {
  const data = await db
    .select()
    .from(me)
    .limit(1)
    .innerJoin(weapons, eq(me.equipped, weapons.id));
  return data[0];
};

export const getStats = async () => {
  const data = await db.select().from(me);
  return data[0];
};

export const getPlaces = async () => {
  const data = await db.select().from(places).where(eq(places.isActive, false));
  return data;
};

export const getEquippedWeapon = async () => {
  const data = (await getMe()).weapons.id;
  return data;
};

// STORE ACTIONS
const goldAlert = () => alert("You do not have enough gold!");

export const buyHealth = async () => {
  if (currentStats.gold < 10) {
    goldAlert();
  } else {
    await db.update(me).set({
      hp: (await currentStats).hp + 30,
      gold: (await currentStats).gold - 10,
    });
  }
};

export const buyWeapon = async () => {
  if (currentStats.gold < 30) {
    goldAlert();
  }
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
  await db
    .update(me)
    .set({
      gold: currentStats.gold - 30,
    })
    .where(eq(me.id, 1));
};

export const sellWeapon = async () => {
  //get inventory excluding equpped weapon
  const nextWeapon = await db
    .select()
    .from(weapons)
    .where(ne(weapons.id, equippedWeaponId));
  if (nextWeapon.length < 1) {
    alert("You have no weapons to sell!");
  } else {
    await db
      .update(weapons)
      .set({
        inInventory: false,
      })
      .where(eq(weapons.id, nextWeapon[0].id));
    await db.update(me).set({
      gold: currentStats.gold + 15,
    });
  }
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
