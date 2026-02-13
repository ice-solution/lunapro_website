import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Globe, HeartHandshake, Leaf, Shield, Sparkles, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/data/site-data";
import PageLayout from "@/components/layout/PageLayout";

export default function About() {
  return (
    <PageLayout activePath="/about">
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              品牌故事
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              Luna - Where Simplicity Meets Luxury
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              簡約與奢華的交匯，純粹與專業的結合
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                {aboutContent.description}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{aboutContent.proTitle}</h2>
              <p className="text-lg leading-relaxed text-foreground">
                {aboutContent.proDescription}
              </p>

              <div className="mt-8 p-6 bg-accent/50 rounded-lg border-l-4 border-primary">
                <p className="text-base italic text-foreground">
                  "加入 Luna 的旅程，發現簡約與真正有效性融合的優雅。"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Sophia & Wing, Luna Skin 創辦人
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From B2C to B2B */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl font-serif font-bold">從個人護理到專業賦能</h2>
            <p className="text-lg text-muted-foreground">
              我們將「輕鬆自我護理」的品牌理念昇華為「專業賦能與合作共贏」，<br />
              致力於成為美容專業領域最值得信賴的合作夥伴
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold">B2C 基因</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>輕鬆自我護理的品牌理念</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>簡約與奢華的設計哲學</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>法國原料 + 香港製造</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>全天然、無毒配方</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">B2B 進化</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>專業賦能與合作共贏</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>數位優先的批發平台</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>CMA認證 + 科學驗證</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>培訓、諮詢、行銷支持</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">我們的核心價值</h2>
            <p className="text-muted-foreground">Luna Skin 致力於為B2B合作夥伴提供最優質的產品和服務</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">源自純粹</h3>
                <p className="text-sm text-muted-foreground">
                  法國 PROD'HYG 頂級原材料，全天然無毒配方，白睡蓮花與復活草等科學驗證成分
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">香港匠心</h3>
                <p className="text-sm text-muted-foreground">
                  香港本土研發製造，CMA（香港標準及檢定中心）QC認證，確保每個環節精益求精
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">專業賦能</h3>
                <p className="text-sm text-muted-foreground">
                  全面產品培訓、行銷支持和專業諮詢，協助合作夥伴提升服務品質，共同開拓市場
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">共贏未來</h3>
                <p className="text-sm text-muted-foreground">
                  建立長期互惠合作關係，持續創新，與您攜手共創美容行業的輝煌未來
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Quality */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-3">品質保證</h2>
              <p className="text-muted-foreground">我們的產品符合最高國際標準</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <Shield className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">CMA 認證</h3>
                  <p className="text-sm text-muted-foreground">
                    香港標準及檢定中心質量控制認證
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <Globe className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">EU 標準</h3>
                  <p className="text-sm text-muted-foreground">
                    嚴格遵循歐盟化妝品法規
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <Leaf className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-semibold">全天然配方</h3>
                  <p className="text-sm text-muted-foreground">
                    無毒、環保、可持續
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">合作成功案例</h2>
            <p className="text-muted-foreground">與業界領先品牌攜手共創佳績</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">皇家太平洋酒店</h3>
                <p className="text-sm text-muted-foreground">
                  為酒店水療中心提供全系列護膚產品，提升客戶體驗，獲得高度評價
                </p>
                <div className="text-xs text-primary font-medium">
                  酒店 & 度假村合作
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-lg">美麗華集團 JAJA</h3>
                <p className="text-sm text-muted-foreground">
                  首半月業績達 HKD 10萬，展示產品在高端餐飲場所的市場潛力
                </p>
                <div className="text-xs text-primary font-medium">
                  精品零售合作
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg">KOL 合作推廣</h3>
                <p className="text-sm text-muted-foreground">
                  與 Grace Chan、Ally Chan 等知名 KOL 合作，成功提升品牌知名度和市場影響力
                </p>
                <div className="text-xs text-primary font-medium">
                  KOL 推廣合作
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">準備好與我們合作了嗎？</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            加入 Luna Skin 的合作夥伴網絡，共同開創美容行業的新篇章
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                立即聯絡我們
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                瀏覽產品目錄
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </PageLayout>
  );
}

