import { boolean, integer, json, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const doctor = pgTable("doctor", {
  id: serial("id").primaryKey().notNull().unique(),
  name: varchar("name", { length: 256 }),
  role: varchar("role", { length: 20 }),
  password: varchar("password", { length: 20 }),
  email: varchar("email", { length: 256 }).unique().notNull(),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
});

export const patient = pgTable("patient", {
  id: serial("id").primaryKey().unique(),
  email: varchar("email", { length: 256 }).unique().notNull(),
  name: varchar("name", { length: 256 }),
  gender: varchar("gender", { length: 10 }),
  phoneNo: integer("phoneNo").notNull(),
  address: varchar("address", { length: 256 }),
  disease: varchar("disease", { length: 256 }),
  status: varchar("status", { length: 256 }).default("null"),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
});

export type getDoctor = typeof doctor.$inferSelect;
export type returnDoctor = typeof doctor.$inferSelect;
export type newPatient = typeof patient.$inferInsert;
export type returnPatient = typeof patient.$inferInsert;

export const message = pgTable("message", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text", { length: 256 }).notNull(),
  senderId: integer("senderId").references(() => doctor.id || patient.id),
  receiverId: integer("receiverId").references(() => doctor.id || patient.id),
  sentAt: timestamp("sentAt", { mode: "string" }).defaultNow(),
  media: json("media"),
});

export type getMessage = typeof message.$inferSelect;
export type newMessage = typeof message.$inferInsert;

export const addNewPatient = pgTable("addNewPatient", {
  id: serial("id").primaryKey().notNull(),
  firstName: varchar("firstName", { length: 20 }).notNull(),
  lastName: varchar("lastName", { length: 20 }).notNull(),
  location: varchar("location", { length: 20 }).notNull(),
  email: varchar("email", { length: 30 }).notNull().unique(),
  phoneNo: integer("phoneNo").notNull(),
  reason: varchar("reason", { length: 256 }).notNull().unique(),
  createdAt: timestamp("createdAt", { mode: "string" }).defaultNow(),
});
