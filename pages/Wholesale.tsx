import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, CreditCard, HeadphonesIcon, GraduationCap, TrendingUp } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export default function Wholesale() {
  return (
    <PageLayout activePath="/wholesale">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-100/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">批發商配套方案</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">專為您的業務量身定制</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Luna Skin 提供靈活的批發方案，滿足不同規模和類型的美容業務需求
          </p>
        </div>
      </section>

      {/* Membership Tiers Detailed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">會員等級詳情</h2>
            <p className="text-xl text-gray-600">選擇最適合您業務的會員等級</p>
          </div>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Bronze */}
            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🥉</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Luna Bronze 銅級會員</h3>
                      <p className="text-gray-600 mt-1">適合初次合作的美容業務</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">免費</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">核心權益</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>批發價格訪問權限</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>標準客戶支持（工作日9-6）</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>基礎產品培訓資料</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>在線訂購系統</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">訂購條件</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>最低訂購金額：HKD 2,000</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>付款方式：訂單確認後付款</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>配送時間：3-5個工作日</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Silver */}
            <Card className="p-8 border-2 border-primary hover:shadow-xl transition-shadow relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-lg font-semibold">
                最受歡迎
              </div>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🥈</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Luna Silver 銀級會員</h3>
                      <p className="text-gray-600 mt-1">適合穩定經營的美容業務</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">HKD 5,000</p>
                      <p className="text-gray-600">/年</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">核心權益</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span><strong>15% 批量折扣</strong></li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>專屬客戶代表</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>進階專業培訓（每季度）</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>新品優先體驗</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>季度業務諮詢</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>行銷素材支持</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">訂購條件</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>最低訂購金額：HKD 1,500</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>付款方式：30天賬期</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>配送時間：2-3個工作日</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>免運費（訂單滿HKD 3,000）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Gold */}
            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🥇</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Luna Gold 金級會員</h3>
                      <p className="text-gray-600 mt-1">適合大型美容集團和連鎖機構</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-gray-900">HKD 15,000</p>
                      <p className="text-gray-600">/年</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">核心權益</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span><strong>20% 批量折扣</strong></li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>定制定價方案</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>60天賬期</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>API整合支持</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>專屬物流支持</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>定制療程開發諮詢</li>
                        <li className="flex items-start"><span className="text-primary mr-2">✓</span>年度戰略規劃會議</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">訂購條件</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>無最低訂購金額限制</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>付款方式：60天賬期</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>配送時間：1-2個工作日</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>全年免運費</li>
                        <li className="flex items-start"><span className="text-primary mr-2">•</span>優先庫存保留</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-12">立即申請會員</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">批發服務</h2>
            <p className="text-xl text-gray-600">全方位支持您的業務發展</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">靈活訂購</h3>
              <p className="text-gray-600">
                24/7在線訂購系統，支持批量訂購和定期配送，滿足不同業務需求
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">快速配送</h3>
              <p className="text-gray-600">
                香港本地1-3個工作日送達，專業物流團隊確保產品安全送達
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">靈活付款</h3>
              <p className="text-gray-600">
                支持多種付款方式，銀級以上會員享有賬期優惠，減輕現金流壓力
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">專業支持</h3>
              <p className="text-gray-600">
                專屬客戶代表提供一對一服務，快速響應您的需求和問題
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">培訓支持</h3>
              <p className="text-gray-600">
                定期產品培訓和療程開發諮詢，提升您的專業服務能力
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">行銷支持</h3>
              <p className="text-gray-600">
                提供專業行銷素材和社交媒體內容，協助您推廣產品和服務
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">訂購流程</h2>
            <p className="text-xl text-gray-600">簡單四步，輕鬆完成訂購</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">註冊會員</h3>
              <p className="text-gray-600">填寫申請表格，提交業務資料</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">審核通過</h3>
              <p className="text-gray-600">1-2個工作日完成審核，開通帳號</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">選購產品</h3>
              <p className="text-gray-600">瀏覽產品目錄，加入購物車下單</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">收貨使用</h3>
              <p className="text-gray-600">快速配送，開始為客戶提供服務</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">立即開始您的批發之旅</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            加入 Luna Skin 批發計劃，享受專業產品和全方位支持
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-12">
              申請會員
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={LUNA_LOGO} alt="Luna Skin" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm">Where Simplicity Meets Luxury</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速連結</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">關於我們</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">產品目錄</Link></li>
                <li><Link href="/wholesale" className="hover:text-white transition-colors">批發商配套</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">客戶服務</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">聯絡我們</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">常見問題</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">聯絡資訊</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>香港</li>
                <li>info@lunaskin.hk</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Luna Skin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
}

