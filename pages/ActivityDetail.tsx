import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users, Clock, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";

// 活動數據（應該從 API 或數據文件載入）
const activitiesData = [
  {
    id: "1",
    title: "春季新品發布會",
    category: "product_launch",
    description: "Luna Skin 2025春季新品系列正式發布，包括全新蠶絲面膜系列",
    fullDescription: "Luna Skin 2025春季新品發布會將正式推出我們最新的蠶絲面膜系列。這次發布會將展示多款創新產品，包括採用納米技術的美白面膜、富含金箔的奢華面膜，以及專為敏感肌膚設計的舒緩面膜。\n\n活動當天，我們將邀請業界專家進行產品演示，並提供現場試用體驗。參與者將有機會深入了解每款產品的獨特配方和功效，以及如何將這些產品整合到您的專業療程中。\n\n此外，我們還將分享最新的市場趨勢和消費者需求分析，幫助您更好地了解美容行業的發展方向。",
    imageUrl: "/images/qo5ZmrlcpTYX.jpg",
    startDate: "2025-03-15",
    endDate: "2025-03-15",
    time: "14:00 - 17:00",
    location: "香港中環",
    address: "香港中環金融街8號",
    capacity: 50,
    registered: 32,
    isActive: true,
    highlights: [
      "新品現場試用體驗",
      "專業產品演示",
      "業界專家分享",
      "市場趨勢分析",
      "會員專屬優惠"
    ],
    agenda: [
      { time: "14:00 - 14:30", item: "來賓簽到與歡迎茶點" },
      { time: "14:30 - 15:00", item: "新品系列介紹與演示" },
      { time: "15:00 - 15:30", item: "現場試用體驗" },
      { time: "15:30 - 16:00", item: "業界專家分享與Q&A" },
      { time: "16:00 - 17:00", item: "交流時間與會員優惠說明" }
    ]
  },
  {
    id: "2",
    title: "專業美容療程培訓課程",
    category: "training",
    description: "深入學習白睡蓮花緊緻系列的專業使用技巧和療程設計",
    fullDescription: "這是一門專為專業美容師和療程設計師設計的進階培訓課程。課程將深入探討白睡蓮花緊緻系列的專業應用，包括產品成分分析、療程設計原理、以及實際操作技巧。\n\n課程內容涵蓋：\n• 白睡蓮花提取物的科學原理與功效\n• 緊緻療程的設計與執行\n• 不同肌膚類型的處理方法\n• 療程效果的評估與優化\n• 客戶溝通與諮詢技巧\n\n完成課程後，學員將獲得 Luna Skin 認證證書，並可優先獲得新產品資訊和技術支持。",
    imageUrl: "/images/bRM58i5SEyJk.webp",
    startDate: "2025-03-20",
    endDate: "2025-03-20",
    time: "10:00 - 18:00",
    location: "Luna Skin 培訓中心",
    address: "香港北角電氣道148號",
    capacity: 20,
    registered: 15,
    isActive: true,
    highlights: [
      "實操培訓",
      "認證證書",
      "小班教學",
      "持續技術支持",
      "優先獲得新產品資訊"
    ],
    agenda: [
      { time: "10:00 - 12:00", item: "理論課程：產品成分與原理" },
      { time: "12:00 - 13:00", item: "午休時間" },
      { time: "13:00 - 15:00", item: "實操練習：療程設計" },
      { time: "15:00 - 15:30", item: "茶歇" },
      { time: "15:30 - 17:30", item: "實操練習：手法技巧" },
      { time: "17:30 - 18:00", item: "考核與證書頒發" }
    ]
  },
  {
    id: "3",
    title: "會員專屬優惠月",
    category: "promotion",
    description: "全線產品8折優惠，銀級及金級會員額外享有積分雙倍獎賞",
    fullDescription: "為感謝會員的長期支持，Luna Skin 特別推出會員專屬優惠月活動。活動期間，所有會員均可享受全線產品8折優惠，銀級會員更可獲得積分雙倍獎賞，金級會員則享有積分三倍獎賞。\n\n優惠詳情：\n• 全線產品8折優惠\n• 銀級會員：積分雙倍獎賞\n• 金級會員：積分三倍獎賞\n• 新會員註冊即享首單9折優惠\n• 推薦新會員註冊可獲額外積分\n\n活動期間購買的產品均可享受免費配送服務，訂單金額超過 HKD 5,000 更可獲贈精美禮品。",
    imageUrl: "/images/q92ySrSlodao.png",
    startDate: "2025-03-01",
    endDate: "2025-03-31",
    time: "全天",
    location: "線上平台",
    address: "www.lunaskin.hk",
    capacity: 999,
    registered: 0,
    isActive: true,
    highlights: [
      "全線產品8折",
      "積分雙倍/三倍獎賞",
      "免費配送",
      "新會員首單9折",
      "推薦獎勵"
    ],
    agenda: []
  },
  {
    id: "4",
    title: "皇家太平洋酒店合作案例分享",
    category: "case_study",
    description: "了解Luna Skin如何協助皇家太平洋酒店提升水療中心服務品質",
    fullDescription: "本次案例分享將詳細介紹 Luna Skin 如何與皇家太平洋酒店建立合作關係，並協助其水療中心提升服務品質和客戶滿意度。\n\n我們將分享：\n• 合作初期的需求分析與方案設計\n• 產品選擇與療程開發過程\n• 員工培訓與技術支持\n• 客戶反饋與效果評估\n• 持續優化與改進措施\n\n通過這個真實案例，您將了解 Luna Skin 如何為合作夥伴提供全方位的支持，以及如何將我們的產品成功整合到您的業務中。",
    imageUrl: "/images/jpr6UgpJ7wj0.png",
    startDate: "2025-02-28",
    endDate: "2025-02-28",
    time: "15:00 - 17:00",
    location: "線上會議",
    address: "Zoom 線上會議室",
    capacity: 100,
    registered: 68,
    isActive: true,
    highlights: [
      "真實案例分享",
      "合作經驗交流",
      "Q&A 互動環節",
      "後續諮詢服務",
      "合作機會探討"
    ],
    agenda: [
      { time: "15:00 - 15:15", item: "開場與案例背景介紹" },
      { time: "15:15 - 16:00", item: "合作過程詳細分享" },
      { time: "16:00 - 16:30", item: "成果展示與數據分析" },
      { time: "16:30 - 17:00", item: "Q&A 與交流時間" }
    ]
  },
  {
    id: "5",
    title: "2025香港美容博覽會",
    category: "event",
    description: "Luna Skin將參展香港美容博覽會，歡迎蒞臨參觀",
    fullDescription: "Luna Skin 將參加 2025 年香港美容博覽會，這是亞洲最大的美容行業展覽之一。我們將在展會上展示最新的產品系列，包括緊緻系列、補水系列和蠶絲面膜系列。\n\n展會亮點：\n• 最新產品現場展示\n• 專業療程演示\n• 業界專家講座\n• 會員專屬優惠\n• 現場諮詢服務\n\n歡迎所有合作夥伴和潛在客戶蒞臨我們的展位，了解最新的產品資訊和合作機會。我們將為您提供專業的諮詢服務，並解答您關於產品和合作的任何問題。",
    imageUrl: "/images/hd5DMOmQn0Tp.jpg",
    startDate: "2025-04-10",
    endDate: "2025-04-12",
    time: "10:00 - 18:00",
    location: "香港會議展覽中心",
    address: "香港灣仔博覽道1號",
    capacity: 5000,
    registered: 0,
    isActive: true,
    highlights: [
      "最新產品展示",
      "專業療程演示",
      "業界專家講座",
      "現場諮詢服務",
      "會員專屬優惠"
    ],
    agenda: [
      { time: "每日 10:00 - 12:00", item: "產品展示與試用" },
      { time: "每日 14:00 - 15:00", item: "專業療程演示" },
      { time: "每日 15:30 - 16:30", item: "業界專家講座" },
      { time: "每日 16:30 - 18:00", item: "現場諮詢與交流" }
    ]
  },
  {
    id: "6",
    title: "復活草補水系列進階培訓",
    category: "training",
    description: "針對乾性和敏感肌膚的專業護理技巧",
    fullDescription: "這是一門專注於復活草補水系列的進階培訓課程，特別針對乾性和敏感肌膚的護理需求。課程將深入探討復活草提取物的獨特功效，以及如何設計適合不同肌膚類型的補水療程。\n\n課程重點：\n• 復活草成分的科學原理\n• 乾性肌膚的診斷與分析\n• 敏感肌膚的特殊處理方法\n• 補水療程的設計與執行\n• 產品搭配與使用技巧\n• 客戶諮詢與溝通\n\n課程採用線上教學方式，方便各地學員參與。完成課程後，學員將獲得 Luna Skin 認證證書。",
    imageUrl: "/images/ms5UDUt0aag5.webp",
    startDate: "2025-04-15",
    endDate: "2025-04-15",
    time: "14:00 - 18:00",
    location: "線上課程",
    address: "Zoom 線上會議室",
    capacity: 30,
    registered: 22,
    isActive: true,
    highlights: [
      "線上靈活學習",
      "實操演示",
      "認證證書",
      "錄影回放",
      "持續技術支持"
    ],
    agenda: [
      { time: "14:00 - 15:30", item: "理論課程：復活草與補水原理" },
      { time: "15:30 - 15:45", item: "休息時間" },
      { time: "15:45 - 17:00", item: "實操演示：療程設計與執行" },
      { time: "17:00 - 17:30", item: "案例分享與討論" },
      { time: "17:30 - 18:00", item: "Q&A 與證書頒發" }
    ]
  }
];

export default function ActivityDetail() {
  const params = useParams();
  const activityId = params.id as string;
  const activity = activitiesData.find(a => a.id === activityId);

  // 頁面載入時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activityId]);

  useEffect(() => {
    if (activity) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [activity]);

  if (!activity) {
    return (
      <PageLayout activePath="/activities">
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">活動未找到</h2>
            <Link href="/activities">
              <Button>返回活動中心</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { text: string; color: string }> = {
      promotion: { text: "促銷活動", color: "bg-red-100 text-red-700" },
      training: { text: "培訓課程", color: "bg-blue-100 text-blue-700" },
      event: { text: "行業活動", color: "bg-purple-100 text-purple-700" },
      product_launch: { text: "新品發布", color: "bg-green-100 text-green-700" },
      case_study: { text: "成功案例", color: "bg-yellow-100 text-yellow-700" }
    };
    return labels[category] || { text: category, color: "bg-gray-100 text-gray-700" };
  };

  const categoryInfo = getCategoryLabel(activity.category);

  return (
    <PageLayout activePath="/activities">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">首頁</Link>
            <span>/</span>
            <Link href="/activities" className="hover:text-primary">活動中心</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{activity.title}</span>
          </div>
        </div>
      </div>

      {/* Activity Detail */}
      <div className="container mx-auto px-4 py-12">
        <Link href="/activities">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回活動中心
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden mb-8">
              {activity.imageUrl ? (
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">活動圖片</p>
                  </div>
                </div>
              )}
            </div>

            {/* Title and Badge */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className={categoryInfo.color}>
                  {categoryInfo.text}
                </Badge>
                {activity.isActive && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    進行中
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{activity.title}</h1>
              <p className="text-xl text-gray-600">{activity.description}</p>
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">活動詳情</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {activity.fullDescription}
                </p>
              </div>
            </div>

            {/* Highlights */}
            {activity.highlights && activity.highlights.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">活動亮點</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {activity.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Agenda */}
            {activity.agenda && activity.agenda.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">活動流程</h2>
                <Card className="p-6">
                  <div className="space-y-4">
                    {activity.agenda.map((item, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex-shrink-0 w-32">
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-1 text-gray-700">
                          {item.item}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">活動資訊</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">日期</p>
                    <p className="font-semibold text-gray-900">
                      {activity.startDate}
                      {activity.endDate && activity.endDate !== activity.startDate && ` - ${activity.endDate}`}
                    </p>
                  </div>
                </div>

                {activity.time && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">時間</p>
                      <p className="font-semibold text-gray-900">{activity.time}</p>
                    </div>
                  </div>
                )}

                {activity.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">地點</p>
                      <p className="font-semibold text-gray-900">{activity.location}</p>
                      {activity.address && (
                        <p className="text-sm text-gray-600 mt-1">{activity.address}</p>
                      )}
                    </div>
                  </div>
                )}

                {activity.capacity && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">名額</p>
                      <p className="font-semibold text-gray-900">
                        {activity.registered} / {activity.capacity} 人
                      </p>
                      {activity.capacity < 999 && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${(activity.registered / activity.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  立即報名
                </Button>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    聯絡我們
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
