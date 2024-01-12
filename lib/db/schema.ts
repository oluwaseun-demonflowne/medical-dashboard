import {
  json,
  mysqlTable,
  serial,
  timestamp,
  varchar,
  int,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).unique(),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
});

export type getUser = typeof users.$inferSelect; // return type when queried
export type newUser = typeof users.$inferInsert; // insert type

export const message = mysqlTable("message", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text", { length: 256 }).notNull(),
  senderId: int("senderId").references(() => users.id),
  receiverId: int("receiverId").references(() => users.id),
  sentAt: timestamp("sentAt", { mode: "string" }).defaultNow(),
  media: json("media"),
});

export type getMessage = typeof message.$inferSelect;
export type newMessage = typeof message.$inferInsert;


export const addNewPatient = mysqlTable("addNewPatient", {
    id: serial("id").primaryKey().notNull(),
    firstName: varchar("firstName", { length: 20 }).notNull(),
    lastName: varchar("lastName", { length: 20 }).notNull(),
    location: varchar("location", { length: 20 }).notNull(),
    email: varchar("email", { length: 30 }).notNull().unique(),
    phoneNo: int("phoneNo").notNull(),
    reason: varchar("reason", { length: 256 }).notNull().unique(),
    createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
  });

