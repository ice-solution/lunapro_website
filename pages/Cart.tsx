import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";

export default function Cart() {
  // Mock cart data - in real app, this would come from trpc
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      productId: "p1",
      name: "白睡蓮花緊緻精華液（專業療程用）",
      price: 1280,
      quantity: 2,
      imageUrl: "/images/S8E1zJhPMqbW.jpg"
    },
    {
      id: "2",
      productId: "p2",
      name: "復活草補水精華液",
      price: 880,
      quantity: 1,
      imageUrl: "/images/T7OnCw1OOtVZ.jpg"
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0; // Would be calculated based on membership tier
  const total = subtotal - discount;

  return (
    <PageLayout activePath="/cart">
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">購物車</h1>
          <p className="text-gray-600">您有 {cartItems.length} 件商品在購物車中</p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">購物車是空的</h2>
            <p className="text-gray-600 mb-6">快去選購您喜歡的產品吧！</p>
            <Link href="/products">
              <Button size="lg">瀏覽產品</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <Card key={item.id} className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">HKD {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          移除
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-900">
                        HKD {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">訂單摘要</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>小計</span>
                    <span>HKD {subtotal.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>會員折扣</span>
                      <span>-HKD {discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>總計</span>
                      <span>HKD {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mb-4" size="lg">
                  前往結帳
                </Button>
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    繼續購物
                  </Button>
                </Link>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>提示：</strong>銀級會員享有15%折扣，金級會員享有20%折扣
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
        </div>
      </div>
    </PageLayout>
  );
}

