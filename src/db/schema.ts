import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstname: text("firstname").notNull(),
  lastname: text("lastname").notNull(),
  password: text("password").notNull(),
  verificationCode: text("verify").notNull(),
  verified: boolean("verified").default(false).notNull(),
});

export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
