import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import "dotenv/config";

const client = createClient({
  url: process.env.DB_URL!,
});

export const db = drizzle(client, { schema });
