import { sql } from "drizzle-orm";
import { pgTable, text, varchar, decimal, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const tokenMetrics = pgTable("token_metrics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  price: decimal("price", { precision: 18, scale: 8 }).notNull(),
  marketCap: decimal("market_cap", { precision: 18, scale: 2 }).notNull(),
  holders: integer("holders").notNull(),
  totalSupply: decimal("total_supply", { precision: 18, scale: 0 }).notNull(),
  circulatingSupply: decimal("circulating_supply", { precision: 18, scale: 0 }).notNull(),
  contractAddress: text("contract_address").notNull(),
});

export const communityStats = pgTable("community_stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  telegram: integer("telegram").notNull(),
  twitter: integer("twitter").notNull(),
  discord: integer("discord").notNull(),
  reddit: integer("reddit").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTokenMetricsSchema = createInsertSchema(tokenMetrics).omit({
  id: true,
});

export const insertCommunityStatsSchema = createInsertSchema(communityStats).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type TokenMetrics = typeof tokenMetrics.$inferSelect;
export type CommunityStats = typeof communityStats.$inferSelect;
export type InsertTokenMetrics = z.infer<typeof insertTokenMetricsSchema>;
export type InsertCommunityStats = z.infer<typeof insertCommunityStatsSchema>;
