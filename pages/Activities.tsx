import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award } from "lucide-react";
import { activitiesContent } from "@/data/site-data";
import PageLayout from "@/components/layout/PageLayout";
import { useState } from "react";

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mock activities data
  const activities = [
    {
      id: "1",
      title: "春季新品發布會",
      category: "product_launch",
      description: "Luna Skin 2025春季新品系列正式發布，包括全新蠶絲面膜系列",
      imageUrl: "/images/qo5ZmrlcpTYX.jpg",
      startDate: "2025-03-15",
      location: "香港中環",
      isActive: true
    },
    {
      id: "2",
      title: "專業美容療程培訓課程",
      category: "training",
      description: "深入學習白睡蓮花緊緻系列的專業使用技巧和療程設計",
      imageUrl: "/images/bRM58i5SEyJk.webp",
      startDate: "2025-03-20",
      location: "Luna Skin 培訓中心",
      isActive: true
    },
    {
      id: "3",
      title: "會員專屬優惠月",
      category: "promotion",
      description: "全線產品8折優惠，銀級及金級會員額外享有積分雙倍獎賞",
      imageUrl: "/images/q92ySrSlodao.png",
      startDate: "2025-03-01",
      endDate: "2025-03-31",
      isActive: true
    },
    {
      id: "4",
      title: "皇家太平洋酒店合作案例分享",
      category: "case_study",
      description: "了解Luna Skin如何協助皇家太平洋酒店提升水療中心服務品質",
      imageUrl: "/images/jpr6UgpJ7wj0.png",
      startDate: "2025-02-28",
      isActive: true
    },
    {
      id: "5",
      title: "2025香港美容博覽會",
      category: "event",
      description: "Luna Skin將參展香港美容博覽會，歡迎蒞臨參觀",
      imageUrl: "/images/hd5DMOmQn0Tp.jpg",
      startDate: "2025-04-10",
      endDate: "2025-04-12",
      location: "香港會議展覽中心",
      isActive: true
    },
    {
      id: "6",
      title: "復活草補水系列進階培訓",
      category: "training",
      description: "針對乾性和敏感肌膚的專業護理技巧",
      imageUrl: "/images/ms5UDUt0aag5.webp",
      startDate: "2025-04-15",
      location: "線上課程",
      isActive: true
    }
  ];

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

  // 篩選活動
  const filteredActivities = selectedCategory
    ? activities.filter(activity => activity.category === selectedCategory)
    : activities;

  // 分類列表
  const categories = [
    { id: null, label: "全部活動" },
    { id: "product_launch", label: "新品發布" },
    { id: "training", label: "培訓課程" },
    { id: "promotion", label: "促銷活動" },
    { id: "event", label: "行業活動" },
    { id: "case_study", label: "成功案例" }
  ];

  return (
    <PageLayout activePath="/activities">
      <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-100/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{activitiesContent.title}</Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{activitiesContent.subtitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {activitiesContent.description}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id || "all"}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredActivities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map(activity => {
              const categoryInfo = getCategoryLabel(activity.category);
              return (
                <Card key={activity.id} className="overflow-hidden hover:shadow-2xl transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={activity.imageUrl}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={categoryInfo.color}>
                        {categoryInfo.text}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {activity.startDate}
                        {activity.endDate && ` - ${activity.endDate}`}
                      </div>
                      {activity.location && (
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {activity.location}
                        </div>
                      )}
                    </div>
                    <Link href={`/activities/${activity.id}`}>
                      <Button variant="outline" className="w-full">
                        了解更多
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">暫無此類別的活動</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedCategory(null)}
              >
                查看全部活動
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{activitiesContent.whyTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activitiesContent.whyDescription}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {activitiesContent.features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 ? <Users className="w-8 h-8 text-primary" /> : <Award className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">想參加我們的活動？</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            成為 Luna Skin 會員，即可參與所有會員專屬活動
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-12">
              立即申請會員
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </PageLayout>
  );
}

