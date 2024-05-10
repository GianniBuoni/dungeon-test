import { boolean } from "drizzle-orm/mysql-core";
import { text } from "drizzle-orm/sqlite-core";
import { integer } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";
import { tree } from "next/dist/build/templates/app-page";

export const monsters = sqliteTable("monsters", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  name: text("name", { length: 50 }).notNull(),
  hp: integer("hp").notNull(),
  attack: integer("attack").notNull(),
});

export const me = sqliteTable("me", {
  id: integer("id").notNull().primaryKey(),
  hp: integer("hp").notNull(),
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
