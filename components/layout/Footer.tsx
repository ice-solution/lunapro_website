import { Link } from "wouter";
import { LUNA_LOGO } from "@shared/const";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src={LUNA_LOGO}
              alt="Luna Skin"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">Where Simplicity Meets Luxury</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">快速連結</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  產品目錄
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white transition-colors">
                  活動中心
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">客戶服務</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  常見問題
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  服務條款
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  隱私政策
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">聯絡資訊</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>香港</li>
              <li>電郵: info@lunaskin.hk</li>
              <li>電話: +852 XXXX XXXX</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Luna Skin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


