import type { Collection, Db, MongoClient } from "mongodb";
import { MongoClient as MongoClientImpl } from "mongodb";

/**
 * MongoDB 版本的資料層（對齊你目前使用的 MongoDB）。
 *
 * 注意：
 * - 這份 `db.ts` 目前主要被 `routers.ts`（後端骨架）引用；前端頁面現況走本地 JSON mock。
 * - 連線參數：
 *   - `MONGODB_URI`：Mongo 連線字串
 *   - `MONGODB_DB`：db name（預設 lunaskin）
 */

export type UserRole = "user" | "admin";

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  loginMethod?: string | null;
  role?: UserRole;
  createdAt?: Date;
  lastSignedIn?: Date;
};

export type ProductCategory = {
  id: string;
  name: string;
  nameEn?: string | null;
  description?: string | null;
  createdAt?: Date;
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  nameEn?: string | null;
  type?: string | null;
  description?: string | null;
  keyIngredients?: string | null; // JSON string
  benefits?: string | null; // JSON string
  usage?: string | null;
  imageUrl?: string | null;
  price?: string | null;
  stock?: number | string | null;
  sku?: string | null;
  certifications?: string | null; // JSON string
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  options?: unknown[];
};

export type MembershipTier = {
  id: string;
  name: string;
  nameEn?: string | null;
  annualFee?: string | null;
  discountRate?: string | null;
  benefits?: string | null; // JSON string
  minOrderValue?: string | null;
  paymentTerms?: string | null;
  createdAt?: Date;
};

export type MemberStatus = "pending" | "active" | "suspended";

export type Member = {
  id: string;
  userId: string;
  tierId: string;
  companyName: string;
  businessType?: string | null;
  contactPerson?: string | null;
  phone?: string | null;
  address?: string | null;
  businessLicense?: string | null;
  status: MemberStatus;
  membershipStartDate?: Date | null;
  membershipEndDate?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Order = {
  id: string;
  memberId: string;
  orderNumber: string;
  totalAmount: string;
  discountAmount?: string | null;
  finalAmount: string;
  status?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
  createdAt?: Date;
};

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  message?: string | null;
  createdAt?: Date;
};

type Collections = {
  users: Collection<User>;
  productCategories: Collection<ProductCategory>;
  products: Collection<Product>;
  membershipTiers: Collection<MembershipTier>;
  members: Collection<Member>;
  orders: Collection<Order>;
  orderItems: Collection<OrderItem>;
  inquiries: Collection<Inquiry>;
};

let _client: MongoClient | null = null;
let _db: Db | null = null;
let _collections: Collections | null = null;

function getMongoUri() {
  return process.env.MONGODB_URI || "";
}

function getMongoDbName() {
  return process.env.MONGODB_DB || "lunaskin";
}

export async function getDb(): Promise<Db | null> {
  const uri = getMongoUri();
  if (!uri) return null;

  if (_db) return _db;

  try {
    _client = new MongoClientImpl(uri);
    await _client.connect();
    _db = _client.db(getMongoDbName());
    return _db;
  } catch (error) {
    console.warn("[Database] Failed to connect:", error);
    _client = null;
    _db = null;
    _collections = null;
    return null;
  }
}

async function getCollections(): Promise<Collections | null> {
  if (_collections) return _collections;
  const db = await getDb();
  if (!db) return null;

  _collections = {
    users: db.collection<User>("users"),
    productCategories: db.collection<ProductCategory>("productCategories"),
    products: db.collection<Product>("products"),
    membershipTiers: db.collection<MembershipTier>("membershipTiers"),
    members: db.collection<Member>("members"),
    orders: db.collection<Order>("orders"),
    orderItems: db.collection<OrderItem>("orderItems"),
    inquiries: db.collection<Inquiry>("inquiries"),
  };

  return _collections;
}

function normalizeOwnerId(): string | null {
  return (process.env.OWNER_ID || "").trim() || null;
}

// ============ User Queries ============

export async function upsertUser(user: User): Promise<void> {
  if (!user?.id) throw new Error("User ID is required for upsert");

  const cols = await getCollections();
  if (!cols) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  const ownerId = normalizeOwnerId();
  const role: UserRole = user.role ?? (ownerId && user.id === ownerId ? "admin" : "user");

  await cols.users.updateOne(
    { id: user.id },
    {
      $set: {
        ...user,
        role,
        lastSignedIn: user.lastSignedIn ?? new Date(),
      },
      $setOnInsert: {
        createdAt: user.createdAt ?? new Date(),
      },
    },
    { upsert: true }
  );
}

export async function getUser(id: string): Promise<User | undefined> {
  const cols = await getCollections();
  if (!cols) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }
  const result = await cols.users.findOne({ id });
  return result ?? undefined;
}

// ============ Product Queries ============

export async function getAllProducts(): Promise<Product[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.products.find({ $or: [{ isActive: true }, { isActive: { $exists: false } }] }).toArray();
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const cols = await getCollections();
  if (!cols) return undefined;
  const result = await cols.products.findOne({ id });
  return result ?? undefined;
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.products.find({ categoryId }).toArray();
}

export async function getAllCategories(): Promise<ProductCategory[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.productCategories.find({}).toArray();
}

// ============ Membership Queries ============

export async function getAllMembershipTiers(): Promise<MembershipTier[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.membershipTiers.find({}).toArray();
}

export async function getMemberByUserId(userId: string): Promise<Member | undefined> {
  const cols = await getCollections();
  if (!cols) return undefined;
  const result = await cols.members.findOne({ userId });
  return result ?? undefined;
}

export async function createMember(member: Member): Promise<void> {
  const cols = await getCollections();
  if (!cols) throw new Error("Database not available");
  await cols.members.insertOne({
    ...member,
    status: member.status ?? "pending",
    createdAt: member.createdAt ?? new Date(),
    updatedAt: member.updatedAt ?? new Date(),
  });
}

export async function updateMemberStatus(memberId: string, status: MemberStatus): Promise<void> {
  const cols = await getCollections();
  if (!cols) throw new Error("Database not available");
  await cols.members.updateOne({ id: memberId }, { $set: { status, updatedAt: new Date() } });
}

// ============ Order Queries ============

export async function getOrdersByMemberId(memberId: string): Promise<Order[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.orders.find({ memberId }).toArray();
}

export async function getOrderById(orderId: string): Promise<Order | undefined> {
  const cols = await getCollections();
  if (!cols) return undefined;
  const result = await cols.orders.findOne({ id: orderId });
  return result ?? undefined;
}

export async function getOrderItemsByOrderId(orderId: string): Promise<OrderItem[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.orderItems.find({ orderId }).toArray();
}

export async function createOrder(order: Order): Promise<void> {
  const cols = await getCollections();
  if (!cols) throw new Error("Database not available");
  await cols.orders.insertOne({
    ...order,
    createdAt: order.createdAt ?? new Date(),
    updatedAt: order.updatedAt ?? new Date(),
  });
}

export async function createOrderItem(item: OrderItem): Promise<void> {
  const cols = await getCollections();
  if (!cols) throw new Error("Database not available");
  await cols.orderItems.insertOne({
    ...item,
    createdAt: item.createdAt ?? new Date(),
  });
}

// ============ Inquiry Queries ============

export async function createInquiry(inquiry: Inquiry): Promise<void> {
  const cols = await getCollections();
  if (!cols) throw new Error("Database not available");
  await cols.inquiries.insertOne({
    ...inquiry,
    createdAt: inquiry.createdAt ?? new Date(),
  });
}

export async function getAllInquiries(): Promise<Inquiry[]> {
  const cols = await getCollections();
  if (!cols) return [];
  return await cols.inquiries.find({}).toArray();
}
