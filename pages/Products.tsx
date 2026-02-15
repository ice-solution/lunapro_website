import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Award, Search } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

const formatPrice = (price: string) => {
  return `HKD ${parseInt(price).toLocaleString()}`;
};

export default function Products() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get category from URL query params
  const urlParams = new URLSearchParams(location.split("?")[1]);
  const categoryFromUrl = urlParams.get("category");

  // 使用本地 JSON 資料（暫時，之後可以替換為 tRPC）
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 載入本地資料
    setProducts(productsData);
    setCategories(categoriesData);
    setIsLoading(false);
  }, []);

  const filteredProducts = products
    ? products.filter((product) => {
        const matchesSearch =
          searchQuery === "" ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.nameEn?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === null ||
          product.categoryId === selectedCategory ||
          (categoryFromUrl && product.categoryId === categoryFromUrl);

        return matchesSearch && matchesCategory;
      })
    : [];

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">載入中...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout activePath="/products">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-100/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            產品目錄
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Luna Skin 產品系列</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            採用法國PROD'HYG原料，香港製造，並獲得CMA認證
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="搜尋產品..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                size="sm"
              >
                全部
              </Button>
              {categories?.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  size="sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const benefits = product.benefits
                  ? JSON.parse(product.benefits)
                  : [];
                const certifications = product.certifications
                  ? JSON.parse(product.certifications)
                  : [];

                return (
                  <Card
                    key={product.id}
                    className="flex flex-col hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-6xl mb-2">
                            {product.categoryId === "cat-mask"
                              ? "🌸"
                              : product.categoryId === "cat-serum"
                              ? "💧"
                              : product.categoryId === "cat-cream"
                              ? "🧴"
                              : product.categoryId === "cat-cleanser"
                              ? "🧼"
                              : "🌿"}
                          </div>
                          <div className="flex gap-1 justify-center flex-wrap px-4">
                            {certifications.map((cert: string, idx: number) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                <Award className="w-3 h-3 mr-1" />
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg leading-tight">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {product.nameEn}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      {benefits.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-foreground">
                            主要功效：
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {benefits.slice(0, 3).map((benefit: string, idx: number) => (
                              <li key={idx}>• {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                      <div className="w-full flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">批發價</p>
                          {product.price && parseInt(product.price) > 0 ? (
                            <p className="text-2xl font-bold text-primary">
                              {formatPrice(product.price)}
                            </p>
                          ) : product.options && product.options.length > 0 ? (
                            <p className="text-lg font-semibold text-primary">批量價格</p>
                          ) : (
                            <p className="text-lg font-semibold text-gray-600">價格請詢</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">庫存</p>
                          <p className="text-sm font-semibold">{product.stock} 件</p>
                        </div>
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full" variant="outline">
                          查看詳情
                        </Button>
                      </Link>
                      {/* 購物車功能暫時隱藏 */}
                      {/* {isAuthenticated && (
                        <Button className="w-full gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          加入購物車
                        </Button>
                      )} */}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">暫無產品</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}


