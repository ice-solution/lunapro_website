import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Award, Users, TrendingUp, GraduationCap } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { partners } from "@/data/site-data";

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
                src="/hero.webp" 
                alt="Luna Nymphaea Youthful Tightening Silk Mask" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover bg-gradient-to-br from-blue-50 to-cyan-50"
                onError={(e) => {
                  console.error("Hero image failed to load:", e.currentTarget.src);
                }}
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
              <div className="h-64 bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center overflow-hidden">
                <img 
                  src="/left.jpg" 
                  alt="緊緻系列" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Left image failed to load:", e.currentTarget.src);
                    e.currentTarget.style.display = 'none';
                  }}
                />
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
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                <img 
                  src="/right.jpg" 
                  alt="補水系列" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Right image failed to load:", e.currentTarget.src);
                    e.currentTarget.style.display = 'none';
                  }}
                />
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

      {/* Partners */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">合作夥伴</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              與香港頂尖美容機構和品牌建立長期合作關係
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                {/* 圖片區域 - 上方 */}
                <div className="h-64 md:h-72 bg-gray-50 flex items-center justify-center p-6">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.partner-fallback-image') as HTMLElement | null;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="partner-fallback-image hidden items-center justify-center text-gray-400 text-4xl">
                    🏢
                  </div>
                </div>
                {/* 文字區域 - 下方 */}
                <div className="p-5 md:p-6 text-center border-t border-gray-100">
                  <p className="text-lg md:text-xl font-semibold text-gray-700">{partner.name}</p>
                </div>
              </div>
            ))}
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

