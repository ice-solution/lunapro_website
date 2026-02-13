import { drizzle } from "drizzle-orm/mysql2";
import { nanoid } from "nanoid";
import { productCategories, products, membershipTiers } from "../drizzle/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function seed() {
  console.log("🌱 Seeding database...");

  // Categories
  const categories = [
    {
      id: "cat-firming",
      name: "緊緻系列",
      nameEn: "Firming Collection",
      description: "以白睡蓮花為核心成分，專注於肌膚緊緻與抗衰老"
    },
    {
      id: "cat-hydration",
      name: "深層補水系列",
      nameEn: "Deep Hydration Collection",
      description: "以復活草為核心成分，提供即時深層補水"
    }
  ];

  for (const cat of categories) {
    await db.insert(productCategories).values(cat).onDuplicateKeyUpdate({ set: { name: cat.name } });
  }
  console.log("✅ Categories seeded");

  // Products
  const productList = [
    {
      id: "prod-firming-serum",
      categoryId: "cat-firming",
      name: "白睡蓮花緊緻精華液（專業療程用）",
      nameEn: "White Water Lily Firming Serum (Professional)",
      description: "專為專業美容療程設計的高濃度緊緻精華液，採用法國PROD'HYG白睡蓮花提取物，有效改善肌膚鬆弛，提升輪廓緊緻度。",
      keyIngredients: JSON.stringify(["白睡蓮花提取物", "透明質酸", "維他命E"]),
      benefits: JSON.stringify(["提升肌膚緊緻度", "改善細紋", "增強肌膚彈性"]),
      usage: "專業療程使用：清潔後取適量塗抹於面部，配合按摩手法使用。",
      imageUrl: "/products/firming-serum-pro.jpg",
      price: "1280",
      stock: "100",
      sku: "LS-FS-PRO-50",
      certifications: JSON.stringify(["CMA認證", "PROD'HYG原料"]),
      isActive: "true"
    },
    {
      id: "prod-firming-cream",
      categoryId: "cat-firming",
      name: "白睡蓮花緊緻日霜（零售用）",
      nameEn: "White Water Lily Firming Day Cream (Retail)",
      description: "日常使用的緊緻日霜，質地輕盈易吸收，適合零售給終端客戶。",
      keyIngredients: JSON.stringify(["白睡蓮花提取物", "膠原蛋白", "SPF 30"]),
      benefits: JSON.stringify(["日間緊緻護理", "防曬保護", "改善肌膚彈性"]),
      usage: "早晨清潔後取適量均勻塗抹於面部和頸部。",
      imageUrl: "/products/firming-cream.jpg",
      price: "680",
      stock: "200",
      sku: "LS-FC-RET-50",
      certifications: JSON.stringify(["CMA認證", "PROD'HYG原料"]),
      isActive: "true"
    },
    {
      id: "prod-eye-serum",
      categoryId: "cat-firming",
      name: "白睡蓮花眼部緊緻精華",
      nameEn: "White Water Lily Eye Firming Serum",
      description: "專門針對眼周肌膚設計的緊緻精華，改善眼周細紋和鬆弛。",
      keyIngredients: JSON.stringify(["白睡蓮花提取物", "咖啡因", "肽類"]),
      benefits: JSON.stringify(["緊緻眼周", "減淡細紋", "改善黑眼圈"]),
      usage: "早晚清潔後，取少量輕點於眼周，輕輕按摩至吸收。",
      imageUrl: "/products/eye-serum.jpg",
      price: "580",
      stock: "150",
      sku: "LS-ES-15",
      certifications: JSON.stringify(["CMA認證", "PROD'HYG原料"]),
      isActive: "true"
    },
    {
      id: "prod-hydra-mask",
      categoryId: "cat-hydration",
      name: "復活草密集補水面膜",
      nameEn: "Resurrection Plant Intensive Hydration Mask",
      description: "採用復活草提取物的密集補水面膜，為肌膚提供即時深層補水。",
      keyIngredients: JSON.stringify(["復活草提取物", "透明質酸", "甘油"]),
      benefits: JSON.stringify(["即時補水", "長效保濕", "舒緩肌膚"]),
      usage: "清潔後敷於面部15-20分鐘，取下後輕拍至吸收。每週使用2-3次。",
      imageUrl: "/products/hydra-mask.jpg",
      price: "480",
      stock: "300",
      sku: "LS-HM-BOX10",
      certifications: JSON.stringify(["CMA認證", "PROD'HYG原料"]),
      isActive: "true"
    },
    {
      id: "prod-hydra-serum",
      categoryId: "cat-hydration",
      name: "復活草補水精華液",
      nameEn: "Resurrection Plant Hydration Serum",
      description: "輕盈質地的補水精華液，快速滲透肌膚底層，提供持久保濕。",
      keyIngredients: JSON.stringify(["復活草提取物", "透明質酸", "維他命B5"]),
      benefits: JSON.stringify(["深層補水", "鎖水保濕", "改善乾燥"]),
      usage: "清潔後取2-3滴塗抹於面部，輕拍至吸收。",
      imageUrl: "/products/hydra-serum.jpg",
      price: "880",
      stock: "180",
      sku: "LS-HS-30",
      certifications: JSON.stringify(["CMA認證", "PROD'HYG原料"]),
      isActive: "true"
    },
    {
      id: "prod-hydra-cream",
      categoryId: "cat-hydration",
      name: "復活草舒緩保濕霜",
      nameEn: "Resurrection Plant Soothing Moisturizer",
      description: "豐潤質地的保濕霜，適合乾性及敏感肌膚，提供全天候保濕。",
      keyIngredients: JSON.stringify(["復活草提取物", "神經酰胺", "角鯊烷"]),
      benefits: JSON.stringify(["長效保濕", "舒緩敏感", "修復屏障"]),
      usage: "早晚清潔後取適量均勻塗抹於面部。",
      imageUrl: "/products/hydra-cream.jpg",
      price: "720",
      stock: "220",
      sku: "LS-HC-50",
      certifications: JSON.stringify(["CMA認證", "PROD'HYG原料"]),
      isActive: "true"
    }
  ];

  for (const prod of productList) {
    await db.insert(products).values(prod).onDuplicateKeyUpdate({ set: { name: prod.name } });
  }
  console.log("✅ Products seeded");

  // Membership Tiers
  const tiers = [
    {
      id: "tier-bronze",
      name: "Luna Bronze 銅級",
      nameEn: "Luna Bronze",
      annualFee: "0",
      discountRate: "0",
      benefits: JSON.stringify(["批發價格", "標準支持", "基礎產品培訓"]),
      minOrderValue: "0",
      paymentTerms: "0"
    },
    {
      id: "tier-silver",
      name: "Luna Silver 銀級",
      nameEn: "Luna Silver",
      annualFee: "5000",
      discountRate: "15",
      benefits: JSON.stringify([
        "15%批量折扣",
        "專屬客戶代表",
        "進階專業培訓",
        "新品優先體驗",
        "季度業務諮詢"
      ]),
      minOrderValue: "5000",
      paymentTerms: "30"
    },
    {
      id: "tier-gold",
      name: "Luna Gold 金級",
      nameEn: "Luna Gold",
      annualFee: "15000",
      discountRate: "20",
      benefits: JSON.stringify([
        "20%批量折扣",
        "定制定價方案",
        "60天賬期",
        "API整合支持",
        "專屬物流支持",
        "定制療程開發諮詢",
        "優先庫存保障",
        "年度品牌大使資格"
      ]),
      minOrderValue: "10000",
      paymentTerms: "60"
    }
  ];

  for (const tier of tiers) {
    await db.insert(membershipTiers).values(tier).onDuplicateKeyUpdate({ set: { name: tier.name } });
  }
  console.log("✅ Membership tiers seeded");

  console.log("🎉 Seeding completed!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("❌ Seeding failed:", error);
  process.exit(1);
});

