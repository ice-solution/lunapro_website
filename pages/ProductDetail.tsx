import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Package, Truck, Shield } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<{quantity: number; price: number; unit: number; label?: string} | null>(null);

  // Fetch product details
  const { data: product, isLoading } = trpc.products.getById.useQuery({ id: productId });

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">載入中...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!product) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">產品未找到</h2>
            <Link href="/products">
              <Button>返回產品目錄</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  // 頁面載入時滾動到頂部
  useEffect(() => {
    // 立即滾動到頂部（不使用 smooth，確保立即執行）
    window.scrollTo(0, 0);
  }, [productId]);

  // 產品載入完成後再次確保滾動到頂部
  useEffect(() => {
    if (product && !isLoading) {
      // 使用 setTimeout 確保 DOM 已更新
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [product, isLoading]);

  // 初始化選項（如果有選項，選擇第一個）
  useEffect(() => {
    if (product && product.options && product.options.length > 0 && !selectedOption) {
      setSelectedOption(product.options[0]);
    }
  }, [product, selectedOption]);

  // TODO: Implement add to cart functionality when needed
  // const handleAddToCart = () => {
  //   const qty = selectedOption ? selectedOption.quantity : quantity;
  //   alert(`已添加 ${qty} 件 ${product.name} 到購物車`);
  // };

  // TODO: Calculate total when needed
  // const calculateTotal = () => {
  //   if (selectedOption) {
  //     return selectedOption.price * selectedOption.quantity;
  //   }
  //   if (product.price && parseInt(product.price) > 0) {
  //     return parseInt(product.price) * quantity;
  //   }
  //   return 0;
  // };

  return (
    <PageLayout activePath="/products">

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">首頁</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">產品目錄</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <Link href="/products">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回產品目錄
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-2">
                    {product.categoryId === "cat-mask" ? "🌸" : 
                     product.categoryId === "cat-serum" ? "💧" :
                     product.categoryId === "cat-cream" ? "🧴" :
                     product.categoryId === "cat-cleanser" ? "🧼" : "✨"}
                  </div>
                  <p className="text-gray-500 text-sm">產品圖片</p>
                </div>
              )}
            </div>
            {product.imageUrl && (
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <img
                      src={product.imageUrl || '/images/placeholder-product.jpg'}
                      alt={`${product.name} ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {product.categoryId === 'cat-mask' && '面膜系列'}
              {product.categoryId === 'cat-serum' && '精華系列'}
              {product.categoryId === 'cat-toner' && '爽膚水系列'}
              {product.categoryId === 'cat-cleanser' && '潔面系列'}
              {product.categoryId === 'cat-cream' && '面霜系列'}
              {product.categoryId === 'cat-remover' && '卸妝系列'}
              {product.type && product.type}
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              {product.options && product.options.length > 0 ? (
                <div>
                  <p className="text-2xl font-bold text-primary mb-2">批量價格</p>
                  <p className="text-sm text-gray-600">請選擇下方批量選項查看價格</p>
                </div>
              ) : (
                <>
                  <p className="text-4xl font-bold text-primary">
                    {product.price && parseInt(product.price) > 0 
                      ? `HKD ${parseInt(product.price).toLocaleString()}` 
                      : '價格請詢'}
                  </p>
                  {product.price && parseInt(product.price) > 0 && (
                    <>
                      <p className="text-gray-500 line-through">HKD {(parseInt(product.price) * 1.3).toFixed(0)}</p>
                      <Badge variant="secondary" className="bg-red-100 text-red-700">批發價</Badge>
                    </>
                  )}
                </>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>會員優惠：</strong>
                銀級會員享85折，金級會員享8折
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">產品描述</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-center">
                <Check className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">CMA認證</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">全天然配方</p>
              </Card>
              <Card className="p-4 text-center">
                <Package className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">香港製造</p>
              </Card>
            </div>

            {/* Options Selector (批量價格選項) */}
            {product.options && product.options.length > 0 ? (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">批量價格選項</label>
                <div className="space-y-2 mb-4">
                  {product.options.map((option: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOption(option)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        selectedOption?.quantity === option.quantity
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{option.label}</p>
                          <p className="text-sm text-gray-600">單價：HKD {option.price}@1</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary text-lg">HKD {(option.price * option.quantity).toLocaleString()}</p>
                          <p className="text-xs text-gray-500">總價</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                {selectedOption && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-1">
                      已選擇：<span className="font-semibold">{selectedOption.label || `${selectedOption.quantity}片`}</span>
                    </p>
                    <p className="text-lg font-bold text-primary">
                      總價：HKD {(selectedOption.price * selectedOption.quantity).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* 傳統數量選擇器（如果沒有選項） */
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">數量</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center border-x py-2 focus:outline-none"
                    />
                    <button
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  {product.price && parseInt(product.price) > 0 && (
                    <p className="text-sm text-gray-600">
                      小計：<span className="font-bold text-gray-900">HKD {(parseInt(product.price) * quantity).toLocaleString()}</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              {/* 購物車功能暫時隱藏 */}
              {/* <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                加入購物車
              </Button> */}
              <Button size="lg" variant="outline" className="flex-1">
                立即購買
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6">
              <div className="flex items-start gap-3 mb-4">
                <Truck className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">配送資訊</p>
                  <p className="text-sm text-gray-600">香港地區1-3個工作日送達</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">品質保證</p>
                  <p className="text-sm text-gray-600">7天內如有質量問題可退換貨</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Tabs */}
        <div className="mt-16">
          <div className="border-b mb-8">
            <div className="flex gap-8">
              <button className="pb-4 border-b-2 border-primary text-primary font-semibold">
                產品詳情
              </button>
              <button className="pb-4 text-gray-600 hover:text-primary transition-colors">
                使用方法
              </button>
              <button className="pb-4 text-gray-600 hover:text-primary transition-colors">
                成分說明
              </button>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">產品詳細資訊</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">產品特點</h4>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>採用法國PROD'HYG精選原材料</li>
              <li>香港本地小批量生產，確保新鮮度</li>
              <li>通過CMA（香港標準及檢定中心）QC認證</li>
              <li>符合歐盟化妝品法規標準</li>
              <li>全天然配方，不含有害化學物質</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mb-3">適用對象</h4>
            <p className="text-gray-600 leading-relaxed">
              適合所有膚質使用，特別推薦給專業美容院、水療中心、醫美診所和高端美容零售商。
            </p>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}

