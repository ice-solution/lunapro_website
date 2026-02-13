Text file: schema.ts
Latest content with line numbers:
2	
3	/**
4	 * Core user table backing auth flow.
5	 * Extend this file with additional tables as your product grows.
6	 * Columns use camelCase to match both database fields and generated types.
7	 */
8	export const users = mysqlTable("users", {
9	  id: varchar("id", { length: 64 }).primaryKey(),
10	  name: text("name"),
11	  email: varchar("email", { length: 320 }),
12	  loginMethod: varchar("loginMethod", { length: 64 }),
13	  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
14	  createdAt: timestamp("createdAt").defaultNow(),
15	  lastSignedIn: timestamp("lastSignedIn").defaultNow(),
16	});
17	
18	export type User = typeof users.$inferSelect;
19	export type InsertUser = typeof users.$inferInsert;
20	
21	// Product Categories
22	export const productCategories = mysqlTable("productCategories", {
23	  id: varchar("id", { length: 64 }).primaryKey(),
24	  name: varchar("name", { length: 100 }).notNull(),
25	  nameEn: varchar("nameEn", { length: 100 }),
26	  description: text("description"),
27	  createdAt: timestamp("createdAt").defaultNow(),
28	});
29	
30	export type ProductCategory = typeof productCategories.$inferSelect;
31	export type InsertProductCategory = typeof productCategories.$inferInsert;
32	
33	// Products
34	export const products = mysqlTable("products", {
35	  id: varchar("id", { length: 64 }).primaryKey(),
36	  categoryId: varchar("categoryId", { length: 64 }).notNull(),
37	  name: varchar("name", { length: 200 }).notNull(),
38	  nameEn: varchar("nameEn", { length: 200 }),
39	  description: text("description"),
40	  keyIngredients: text("keyIngredients"), // JSON array of ingredients
41	  benefits: text("benefits"), // JSON array of benefits
42	  usage: text("usage"),
43	  imageUrl: varchar("imageUrl", { length: 500 }),
44	  price: varchar("price", { length: 20 }).notNull(), // Store as string to avoid decimal issues
45	  stock: varchar("stock", { length: 20 }).default("0"),
46	  sku: varchar("sku", { length: 100 }),
47	  certifications: text("certifications"), // JSON array: ["CMA", "PROD'HYG"]
48	  isActive: varchar("isActive", { length: 10 }).default("true"),
49	  createdAt: timestamp("createdAt").defaultNow(),
50	  updatedAt: timestamp("updatedAt").defaultNow(),
51	});
52	
53	export type Product = typeof products.$inferSelect;
54	export type InsertProduct = typeof products.$inferInsert;
55	
56	// Membership Tiers
57	export const membershipTiers = mysqlTable("membershipTiers", {
58	  id: varchar("id", { length: 64 }).primaryKey(),
59	  name: varchar("name", { length: 50 }).notNull(), // Luna Bronze, Luna Silver, Luna Gold
60	  nameEn: varchar("nameEn", { length: 50 }),
61	  annualFee: varchar("annualFee", { length: 20 }).default("0"),
62	  discountRate: varchar("discountRate", { length: 10 }).default("0"), // e.g., "15" for 15%
63	  benefits: text("benefits"), // JSON array of benefits
64	  minOrderValue: varchar("minOrderValue", { length: 20 }).default("0"),
65	  paymentTerms: varchar("paymentTerms", { length: 20 }).default("0"), // days, e.g., "60"
66	  createdAt: timestamp("createdAt").defaultNow(),
67	});
68	
69	export type MembershipTier = typeof membershipTiers.$inferSelect;
70	export type InsertMembershipTier = typeof membershipTiers.$inferInsert;
71	
72	// B2B Members (extends users)
73	export const members = mysqlTable("members", {
74	  id: varchar("id", { length: 64 }).primaryKey(),
75	  userId: varchar("userId", { length: 64 }).notNull(),
76	  tierId: varchar("tierId", { length: 64 }).notNull(),
77	  companyName: varchar("companyName", { length: 200 }).notNull(),
78	  businessType: varchar("businessType", { length: 100 }), // Salon, Spa, Clinic, Retailer, Hotel
79	  contactPerson: varchar("contactPerson", { length: 100 }),
80	  phone: varchar("phone", { length: 50 }),
81	  address: text("address"),
82	  businessLicense: varchar("businessLicense", { length: 200 }),
83	  status: mysqlEnum("status", ["pending", "active", "suspended"]).default("pending").notNull(),
84	  membershipStartDate: timestamp("membershipStartDate"),
85	  membershipEndDate: timestamp("membershipEndDate"),
86	  createdAt: timestamp("createdAt").defaultNow(),
87	  updatedAt: timestamp("updatedAt").defaultNow(),
88	});
89	
90	export type Member = typeof members.$inferSelect;
91	export type InsertMember = typeof members.$inferInsert;
92	
93	// Orders
94	export const orders = mysqlTable("orders", {
95	  id: varchar("id", { length: 64 }).primaryKey(),
96	  memberId: varchar("memberId", { length: 64 }).notNull(),
97	  orderNumber: varchar("orderNumber", { length: 50 }).notNull(),
98	  totalAmount: varchar("totalAmount", { length: 20 }).notNull(),
99	  discountAmount: varchar("discountAmount", { length: 20 }).default("0"),
100	  finalAmount: varchar("finalAmount", { length: 20 }).notNull(),