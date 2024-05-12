"use server";
import { eq } from "drizzle-orm";
import { db } from "..";
import { places } from "../schema";
import { activePlace } from "./getActions";

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
