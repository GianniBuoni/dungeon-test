import { db } from ".";
import { me, monsters, places, weapons } from "./schema";

async function seed() {
  await db.insert(places).values([
    { id: 1, name: "Town Square", isActive: true },
    { id: 2, name: "Store" },
    { id: 3, name: "Caves" },
    { id: 4, name: "Fight Dragon" },
  ]);

  await db.insert(weapons).values([
    { name: "stick", attack: 5, inInventory: true, inStore: false },
    { name: "dagger", attack: 30 },
    { name: "claw hammer", attack: 50 },
    { name: "sword", attack: 100 },
  ]);

  await db.insert(me).values({
    hp: 100,
    gold: 50,
  });

  await db.insert(monsters).values([
    { name: "slime", hp: 15, level: 2 },
    { name: "fanged beast", hp: 60, level: 8 },
    { name: "dragon", hp: 300, level: 20 },
  ]);
}

seed();
