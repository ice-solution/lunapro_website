import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { contactInfo } from "@/data/site-data";
import PageLayout from "@/components/layout/PageLayout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    businessType: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const submitInquiry = trpc.inquiries.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("提交成功！我們會盡快與您聯繫。");
    },
    onError: (error) => {
      toast.error("提交失敗，請稍後再試。");
      console.error(error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <PageLayout activePath="/contact">
        <div className="min-h-screen bg-background flex items-center justify-center py-20">
          <Card className="max-w-md w-full mx-4">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">提交成功！</CardTitle>
              <CardDescription>
                感謝您的查詢。我們的團隊會在24小時內與您聯繫。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/">
                <Button className="w-full">返回首頁</Button>
              </Link>
              <Link href="/products">
                <Button className="w-full" variant="outline">瀏覽產品</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout activePath="/contact">
      <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">聯絡我們</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {contactInfo.description}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>會員申請 / 查詢表單</CardTitle>
                <CardDescription>
                  請填寫以下資料，我們會為您提供詳細的會員資訊和報價
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">聯絡人姓名 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      placeholder="請輸入您的姓名"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">電郵地址 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">聯絡電話</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+852 1234 5678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName">公司名稱</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      placeholder="您的公司或店舖名稱"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">業務類型</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleChange("businessType", value)}
                    >
                      <SelectTrigger id="businessType">
                        <SelectValue placeholder="請選擇您的業務類型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="salon">美容院 / Beauty Salon</SelectItem>
                        <SelectItem value="spa">水療中心 / Spa Center</SelectItem>
                        <SelectItem value="clinic">醫美診所 / Medical Aesthetic Clinic</SelectItem>
                        <SelectItem value="retailer">精品零售商 / Boutique Retailer</SelectItem>
                        <SelectItem value="hotel">酒店 / Hotel</SelectItem>
                        <SelectItem value="other">其他 / Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">訊息 / 查詢內容 *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      placeholder="請告訴我們您的需求、感興趣的產品或任何問題..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitInquiry.isPending}
                  >
                    {submitInquiry.isPending ? "提交中..." : "提交查詢"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>聯絡資訊</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">電郵</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">電話</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">地址</p>
                      <p className="text-sm text-muted-foreground">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>營業時間</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">星期一至五</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">星期六</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">星期日及公眾假期</span>
                    <span className="font-semibold">休息</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardHeader>
                  <CardTitle>為什麼選擇 Luna Skin？</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>法國PROD'HYG頂級原材料</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>香港製造，CMA認證</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>專業培訓與行銷支持</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>靈活的會員計劃與賬期</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 線上訂購平台</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageLayout>
  );
}

