import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const places = sqliteTable("places", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(false),
});

export const monsters = sqliteTable("monsters", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  name: text("name", { length: 50 }).notNull(),
  hp: integer("hp").notNull(),
  level: integer("level").notNull(),
});

export const me = sqliteTable("me", {
  id: integer("id").notNull().primaryKey(),
  xp: integer("xp").notNull().default(0),
  hp: integer("hp").notNull().default(100),
  gold: integer("gold").notNull().default(50),
  equippedId: integer("equipped_id")
    .notNull()
    .default(1)
    .references(() => weapons.id),
});

export const weapons = sqliteTable("weapons", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  name: text("name", { length: 50 }).notNull(),
  attack: integer("attack").notNull(),
  inInventory: integer("in_inventory", { mode: "boolean" })
    .notNull()
    .default(false),
  inStore: integer("in_store", { mode: "boolean" }).notNull().default(true),
});
