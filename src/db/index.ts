import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionPool = mysql.createPool(
  process.env.DATABASE_URL || "mysql://root:password@127.0.0.1:3306/belajar_vibe_coding"
);

export const db = drizzle(connectionPool, { schema, mode: "default" });
