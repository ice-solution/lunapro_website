import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { LUNA_LOGO } from "@shared/const";
// import { ShoppingBag } from "lucide-react"; // 購物車功能暫時隱藏

interface NavigationProps {
  activePath?: string;
}

export default function Navigation({ activePath }: NavigationProps) {
  const [location] = useLocation();
  const currentPath = activePath || location;

  const navLinks = [
    { href: "/", label: "首頁" },
    { href: "/about", label: "關於我們" },
    { href: "/products", label: "產品目錄" },
    { href: "/activities", label: "活動中心" },
    { href: "/contact", label: "聯絡我們" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src={LUNA_LOGO} alt="Luna Skin" className="h-16 cursor-pointer" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  currentPath === link.href
                    ? "text-primary font-bold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* 購物車功能暫時隱藏 */}
            {/* <Link href="/cart" className="hidden md:block">
              <Button variant="outline" size="sm">
                <ShoppingBag className="w-4 h-4 mr-2" />
                購物車
              </Button>
            </Link>
            <Link href="/cart" className="md:hidden">
              <Button variant="outline" size="sm">
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </Link> */}
            {/* 會員中心功能暫時隱藏 */}
            {/* <Link href="/dashboard">
              <Button size="sm">會員中心</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}


