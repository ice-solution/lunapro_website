// @ts-nocheck
import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  User, 
  ShoppingBag, 
  Award, 
  LogOut,
  Package,
  CreditCard,
  TrendingUp
} from "lucide-react";
import { getLoginUrl } from "@/const";

export default function Dashboard() {
  // const [location] = useLocation(); // TODO: Implement when needed
  const { user, isAuthenticated, loading } = useAuth();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      window.location.href = "/";
    }
  });

  // Redirect to login if not authenticated
  if (!loading && !isAuthenticated) {
    window.location.href = getLoginUrl();
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">載入中...</p>
      </div>
    );
  }

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  // Mock membership data - in real app, fetch from backend
  const membershipTier = "Luna Silver";
  const membershipDiscount = "15%";
  const memberSince = "2025年1月";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold">Luna Skin</span>
            </div>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            登出
          </Button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            歡迎回來，{user?.name || "會員"}
          </h1>
          <p className="text-muted-foreground">管理您的會員資訊和訂單</p>
        </div>

        {/* Membership Card */}
        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  {membershipTier}
                </CardTitle>
                <CardDescription>會員編號：{user?.id?.slice(0, 8).toUpperCase()}</CardDescription>
              </div>
              <Badge className="bg-primary text-primary-foreground">
                {membershipDiscount} 折扣
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">會員等級</p>
                <p className="font-semibold">{membershipTier}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">加入日期</p>
                <p className="font-semibold">{memberSince}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">專屬折扣</p>
                <p className="font-semibold text-primary">{membershipDiscount}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/membership">
                <Button variant="outline" size="sm">
                  升級會員等級
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">總訂單</CardTitle>
              <ShoppingBag className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground mt-1">
                暫無訂單記錄
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">累計消費</CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">HKD 0</div>
              <p className="text-xs text-muted-foreground mt-1">
                開始您的第一筆訂單
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">節省金額</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">HKD 0</div>
              <p className="text-xs text-muted-foreground mt-1">
                透過會員折扣節省
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="orders">我的訂單</TabsTrigger>
            <TabsTrigger value="profile">個人資料</TabsTrigger>
            <TabsTrigger value="benefits">會員權益</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>訂單記錄</CardTitle>
                <CardDescription>查看您的所有訂單</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">您還沒有任何訂單</p>
                  <Link href="/products">
                    <Button>開始選購</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>個人資料</CardTitle>
                <CardDescription>管理您的帳戶資訊</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">姓名</label>
                    <p className="text-foreground mt-1">{user?.name || "未設定"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">電郵</label>
                    <p className="text-foreground mt-1">{user?.email || "未設定"}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">會員編號</label>
                    <p className="text-foreground mt-1">{user?.id?.slice(0, 12).toUpperCase()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">登入方式</label>
                    <p className="text-foreground mt-1">{user?.loginMethod || "未知"}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline">編輯資料</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>會員權益</CardTitle>
                <CardDescription>您的 {membershipTier} 專屬權益</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">15% 批量折扣</h4>
                      <p className="text-sm text-muted-foreground">
                        所有產品享有15%的批發折扣
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">專屬客戶代表</h4>
                      <p className="text-sm text-muted-foreground">
                        一對一專業服務支持
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">進階專業培訓</h4>
                      <p className="text-sm text-muted-foreground">
                        產品知識和應用技巧培訓
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Package className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">新品優先體驗</h4>
                      <p className="text-sm text-muted-foreground">
                        搶先體驗最新產品
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">季度業務諮詢</h4>
                      <p className="text-sm text-muted-foreground">
                        定期業務發展建議
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 border-2 border-primary/20 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5">
                  <h4 className="font-semibold mb-2">想要更多權益？</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    升級至 Luna Gold 會員，享受20%折扣、60天賬期、API整合支持等更多專屬權益。
                  </p>
                  <Link href="/membership">
                    <Button>了解 Gold 會員</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

