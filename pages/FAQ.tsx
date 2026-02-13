import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "product",
      question: "Luna Skin 產品的主要成分是什麼？",
      answer: "我們的產品採用法國 PROD'HYG 精選原材料，核心成分包括白睡蓮花（Nymphaea Alba）用於緊緻系列，以及復活草（Resurrection Plant）用於深層補水系列。所有成分均經過科學驗證，確保安全有效。"
    },
    {
      category: "product",
      question: "產品是否獲得認證？",
      answer: "是的，所有 Luna Skin 產品均獲得 CMA（香港標準及檢定中心）QC 認證，並嚴格遵循歐盟化妝品法規標準。我們承諾全天然、無毒配方。"
    },
    {
      category: "product",
      question: "產品的保質期是多久？",
      answer: "未開封產品的保質期為3年。開封後建議在12個月內使用完畢，以確保最佳效果。每件產品包裝上都標註有生產日期和保質期。"
    },
    {
      category: "membership",
      question: "如何申請成為會員？",
      answer: "您可以通過我們的網站填寫會員申請表格，提交公司資料和營業執照。我們會在1-2個工作日內完成審核，並通過電郵通知您審核結果。"
    },
    {
      category: "membership",
      question: "不同會員等級有什麼分別？",
      answer: "Luna Bronze（銅級）是免費會員，享有批發價格；Luna Silver（銀級）年費HKD 5,000，享有15%折扣和專屬客戶代表；Luna Gold（金級）年費HKD 15,000，享有20%折扣、60天賬期和定制服務。"
    },
    {
      category: "membership",
      question: "會員資格可以升級嗎？",
      answer: "可以。您可以隨時升級會員等級。升級後，新的會員權益將立即生效，年費差額將按比例計算。"
    },
    {
      category: "order",
      question: "最低訂購金額是多少？",
      answer: "Bronze會員最低訂購金額為HKD 2,000，Silver會員為HKD 1,500，Gold會員無最低訂購限制。"
    },
    {
      category: "order",
      question: "如何下訂單？",
      answer: "登入會員帳號後，瀏覽產品目錄，將所需產品加入購物車，然後前往結帳頁面完成訂單。您也可以聯絡您的專屬客戶代表協助下單。"
    },
    {
      category: "order",
      question: "可以取消或修改訂單嗎？",
      answer: "訂單確認後24小時內可以申請取消或修改。超過24小時後，訂單將進入處理階段，無法取消或修改。請聯絡客戶服務團隊處理。"
    },
    {
      category: "shipping",
      question: "配送需要多久？",
      answer: "Bronze會員配送時間為3-5個工作日，Silver會員為2-3個工作日，Gold會員為1-2個工作日。所有配送僅限香港地區。"
    },
    {
      category: "shipping",
      question: "運費如何計算？",
      answer: "Bronze會員訂單滿HKD 5,000免運費，不足則收取HKD 100運費；Silver會員訂單滿HKD 3,000免運費；Gold會員全年免運費。"
    },
    {
      category: "shipping",
      question: "可以指定配送時間嗎？",
      answer: "Silver和Gold會員可以指定配送時間段（上午9-12時、下午2-6時）。Bronze會員採用標準配送時間。"
    },
    {
      category: "service",
      question: "有提供產品培訓嗎？",
      answer: "有的。所有會員都可以獲得基礎產品培訓資料。Silver和Gold會員可以參加定期舉辦的進階專業培訓課程，學習產品使用技巧和療程設計。"
    },
    {
      category: "service",
      question: "如何聯絡客戶服務？",
      answer: "您可以通過電郵（info@lunaskin.hk）、電話或網站聯絡表格聯絡我們。Silver和Gold會員擁有專屬客戶代表，可以直接聯絡。"
    },
    {
      category: "service",
      question: "有退換貨政策嗎？",
      answer: "如產品有質量問題，可在收貨後7天內申請退換貨。請保持產品包裝完整並提供照片證明。非質量問題的退換貨需經過審核。"
    }
  ];

  const categories = [
    { id: "all", label: "全部問題", color: "bg-gray-100 text-gray-700" },
    { id: "product", label: "產品相關", color: "bg-blue-100 text-blue-700" },
    { id: "membership", label: "會員制度", color: "bg-purple-100 text-purple-700" },
    { id: "order", label: "訂購流程", color: "bg-green-100 text-green-700" },
    { id: "shipping", label: "配送物流", color: "bg-yellow-100 text-yellow-700" },
    { id: "service", label: "售後服務", color: "bg-red-100 text-red-700" }
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <PageLayout activePath="/faq">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-100/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">常見問題</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">我們在這裡幫助您</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            查找關於產品、訂購、配送和會員制度的常見問題解答
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">找不到您要的答案？</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            我們的客戶服務團隊隨時準備為您提供協助
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-12">
              聯絡我們
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
        </div>
      </footer>
    </PageLayout>
  );
}

