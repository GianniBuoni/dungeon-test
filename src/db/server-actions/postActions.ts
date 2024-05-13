"use server";
import { and, eq, ne } from "drizzle-orm";
import { db } from "..";
import { me, places, weapons } from "../schema";
import { activePlace, getMe } from "./getActions";
import { error } from "console";
import { NextResponse } from "next/server";

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
  await db
    .update(me)
    .set({
      gold: currentMe.me.gold - 10,
      hp: currentMe.me.hp + 30,
    })
    .where(eq(me.id, currentMe.me.id));
};

export const buyWeapon = async () => {
  const currentMe = await getMe();
  const nextWeapon = await db.query.weapons.findFirst({
    where: eq(weapons.inInventory, false),
  });
  if (!nextWeapon) throw error;
  await db.update(me).set({
    gold: currentMe.me.gold - 30,
  });
  await db
    .update(weapons)
    .set({
      inInventory: true,
      inStore: false,
    })
    .where(eq(weapons.id, nextWeapon!.id));
};

export const sellWeapon = async () => {
  const currentMe = await getMe();
  const nextWeapon = await db.query.weapons.findFirst({
    where: and(
      ne(weapons.id, currentMe.weapons.id),
      eq(weapons.inInventory, true)
    ),
  });
  if (!nextWeapon) throw error;
  await db.update(me).set({
    gold: currentMe.me.gold + 15,
  });
  await db
    .update(weapons)
    .set({
      inInventory: false,
      inStore: true,
    })
    .where(eq(weapons.id, nextWeapon!.id));
};
