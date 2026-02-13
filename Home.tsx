import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Award, Users, TrendingUp, GraduationCap } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout activePath="/">
      <div className="bg-gradient-to-b from-white to-blue-50">

      {/* Hero Section with Banner */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                香港首屈一指的數位優先美容批發平台
              </Badge>
              <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Where Simplicity<br />Meets Luxury
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Luna Skin 結合法國 PROD'HYG 精選原材料與香港匠心製造，為美容院、水療中心、醫美診所和精品零售商提供高品質護膚產品批發服務。
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Award className="w-4 h-4 mr-2" />
                  CMA 認證
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  法國原料
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Users className="w-4 h-4 mr-2" />
                  香港製造
                </Badge>
              </div>
              <div className="flex gap-4">
                <Link href="/products">
                  <Button size="lg" className="text-lg px-8">
                    瀏覽產品
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    申請會員
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero-luna-mask.webp" 
                alt="Luna Nymphaea Youthful Tightening Silk Mask" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-contain bg-gradient-to-br from-blue-50 to-cyan-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promises */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">我們的承諾</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luna Skin 致力於為合作夥伴提供最優質的產品和最專業的服務
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">源自純粹</h3>
              <p className="text-gray-600 leading-relaxed">
                法國 PROD'HYG 頂級原材料，全天然無毒配方，白睡蓮花與復活草等科學驗證成分
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">香港匠心</h3>
              <p className="text-gray-600 leading-relaxed">
                香港本土研發製造，CMA（香港標準及檢定中心）QC認證，確保每個環節精益求精
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">專業賦能</h3>
              <p className="text-gray-600 leading-relaxed">
                全面產品培訓、行銷支持和專業諮詢，協助合作夥伴提升服務品質，共同開拓市場
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">共贏未來</h3>
              <p className="text-gray-600 leading-relaxed">
                建立長期互惠合作關係，持續創新，與您攜手共創美容行業的輝煌未來
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">核心產品系列</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              採用法國PROD'HYG原料，香港製造，並獲得CMA認證
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
                <img src="/images/S8E1zJhPMqbW.jpg" alt="緊緻系列" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl">🌸</span>
                  <h3 className="text-2xl font-bold text-gray-900">緊緻系列</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>核心成分：白睡蓮花（Nymphaea Alba）</strong>
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    專注於肌膚緊緻與抗衰老
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    適合高端美容院和醫美診所專業療程
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    提供專業療程用和零售用產品
                  </li>
                </ul>
                <Link href="/products?category=firming">
                  <Button className="w-full">查看產品</Button>
                </Link>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <img src="/images/T7OnCw1OOtVZ.jpg" alt="補水系列" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl">🌿</span>
                  <h3 className="text-2xl font-bold text-gray-900">深層補水系列</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>核心成分：復活草（Resurrection Plant）</strong>
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    提供即時深層補水
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    適合乾燥氣候或密集護理
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    卓越的保濕能力，長效鎖水
                  </li>
                </ul>
                <Link href="/products?category=hydration">
                  <Button className="w-full">查看產品</Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">會員計劃</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              選擇適合您業務的會員等級，享受專屬批發價格和會員權益
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bronze */}
            <Card className="p-8 hover:shadow-2xl transition-shadow border-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥉</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Luna Bronze</h3>
                <p className="text-gray-600">銅級會員</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-gray-900">免費</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">批發價格</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">標準客戶支持</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">基礎產品培訓</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">在線訂購系統</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full">立即申請</Button>
              </Link>
            </Card>

            {/* Silver */}
            <Card className="p-8 hover:shadow-2xl transition-shadow border-2 border-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                推薦
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Luna Silver</h3>
                <p className="text-gray-600">銀級會員</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-gray-900">HKD 5,000</p>
                <p className="text-gray-600">/年</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600"><strong>15% 批量折扣</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">專屬客戶代表</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">進階專業培訓</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">新品優先體驗</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">季度業務諮詢</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full">立即申請</Button>
              </Link>
            </Card>

            {/* Gold */}
            <Card className="p-8 hover:shadow-2xl transition-shadow border-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🥇</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Luna Gold</h3>
                <p className="text-gray-600">金級會員</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-4xl font-bold text-gray-900">HKD 15,000</p>
                <p className="text-gray-600">/年</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600"><strong>20% 批量折扣</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">定制定價方案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">60天賬期</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">API整合支持</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">專屬物流支持</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600">定制療程開發諮詢</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full">立即申請</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">合作夥伴</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              與香港頂尖美容機構和品牌建立長期合作關係
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center h-32">
              <p className="text-lg font-semibold text-gray-700">皇家太平洋酒店</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center h-32">
              <p className="text-lg font-semibold text-gray-700">美麗華 JAJA</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center h-32">
              <p className="text-lg font-semibold text-gray-700">Grace Chan</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center h-32">
              <p className="text-lg font-semibold text-gray-700">Ally Chan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">準備好開始合作了嗎？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            立即申請成為 Luna Skin 會員，享受專屬批發價格和會員權益
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                申請會員
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">
                瀏覽產品
              </Button>
            </Link>
          </div>
        </div>
      </section>

      </div>
    </PageLayout>
  );
}

