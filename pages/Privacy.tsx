import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

export default function Privacy() {
  return (
    <PageLayout activePath="/privacy">

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">隱私政策</h1>
        <p className="text-gray-600 mb-8">最後更新日期：2025年10月19日</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 引言</h2>
            <p className="text-gray-600 leading-relaxed">
              Luna Skin（以下簡稱「我們」、「本公司」）重視您的隱私權。本隱私政策說明我們如何收集、使用、披露和保護您在使用 Luna Skin B2B 批發平台（以下簡稱「本平台」）時提供的個人資料。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              使用本平台即表示您同意本隱私政策中描述的個人資料收集和使用方式。如果您不同意本政策，請不要使用本平台。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 我們收集的資料</h2>
            <h3 className="text-xl font-bold mb-3 text-gray-900">2.1 您主動提供的資料</h3>
            <p className="text-gray-600 leading-relaxed">
              當您註冊帳號、下訂單或使用本平台的其他功能時，我們可能收集以下資料：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>公司名稱、商業登記號碼</li>
              <li>聯絡人姓名、職位</li>
              <li>電郵地址、電話號碼</li>
              <li>公司地址、配送地址</li>
              <li>付款資料（銀行帳號、支票資料）</li>
              <li>業務類型和規模</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900">2.2 自動收集的資料</h3>
            <p className="text-gray-600 leading-relaxed">
              當您訪問本平台時，我們可能自動收集以下技術資料：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>IP 地址、瀏覽器類型和版本</li>
              <li>設備資訊（操作系統、設備型號）</li>
              <li>訪問時間、頁面瀏覽記錄</li>
              <li>點擊流數據、搜索查詢</li>
              <li>Cookie 和類似追蹤技術收集的資料</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 資料使用目的</h2>
            <p className="text-gray-600 leading-relaxed">
              我們收集和使用您的個人資料用於以下目的：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li><strong>提供服務：</strong>處理您的訂單、配送產品、管理帳號</li>
              <li><strong>客戶支持：</strong>回應查詢、解決問題、提供技術支持</li>
              <li><strong>會員管理：</strong>管理會員資格、提供會員權益</li>
              <li><strong>改善服務：</strong>分析使用模式、優化平台功能</li>
              <li><strong>市場推廣：</strong>發送產品資訊、促銷活動、培訓通知（需獲得您的同意）</li>
              <li><strong>安全保障：</strong>防止欺詐、保護平台安全</li>
              <li><strong>法律合規：</strong>遵守法律法規、回應法律程序</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 資料分享與披露</h2>
            <p className="text-gray-600 leading-relaxed">
              我們不會出售您的個人資料。我們僅在以下情況下分享您的資料：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li><strong>服務提供商：</strong>與協助我們運營平台的第三方服務提供商（如物流公司、支付處理商）分享必要資料</li>
              <li><strong>業務轉讓：</strong>在合併、收購或資產出售的情況下，您的資料可能作為業務資產的一部分被轉讓</li>
              <li><strong>法律要求：</strong>根據法律、法規、法律程序或政府要求披露資料</li>
              <li><strong>保護權益：</strong>為保護 Luna Skin、用戶或公眾的權利、財產或安全而必要時</li>
              <li><strong>經您同意：</strong>在其他情況下，我們會在獲得您的明確同意後分享資料</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 資料安全</h2>
            <p className="text-gray-600 leading-relaxed">
              我們採取合理的技術和組織措施來保護您的個人資料免受未經授權的訪問、使用、披露、修改或破壞，包括：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>使用 SSL/TLS 加密技術保護數據傳輸</li>
              <li>實施訪問控制和身份驗證機制</li>
              <li>定期進行安全審計和漏洞掃描</li>
              <li>限制員工訪問個人資料的權限</li>
              <li>與第三方服務提供商簽訂保密協議</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              然而，請注意，沒有任何數據傳輸或存儲系統是100%安全的。我們無法保證絕對的安全性。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Cookie 和追蹤技術</h2>
            <p className="text-gray-600 leading-relaxed">
              我們使用 Cookie 和類似的追蹤技術來改善您的使用體驗、分析網站流量和個性化內容。Cookie 是存儲在您設備上的小型文本文件。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              您可以通過瀏覽器設置拒絕或刪除 Cookie，但這可能影響本平台的某些功能。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 資料保留</h2>
            <p className="text-gray-600 leading-relaxed">
              我們僅在實現收集目的所需的期限內保留您的個人資料，或根據法律法規要求的期限保留。一般而言：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>帳號資料：在帳號活躍期間及終止後7年</li>
              <li>訂單和交易記錄：7年（符合稅務和會計要求）</li>
              <li>市場推廣資料：直到您撤回同意或要求刪除</li>
              <li>技術日誌：通常保留12個月</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. 您的權利</h2>
            <p className="text-gray-600 leading-relaxed">
              根據適用的數據保護法律，您對您的個人資料享有以下權利：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li><strong>訪問權：</strong>要求獲取我們持有的關於您的個人資料副本</li>
              <li><strong>更正權：</strong>要求更正不準確或不完整的個人資料</li>
              <li><strong>刪除權：</strong>在特定情況下要求刪除您的個人資料</li>
              <li><strong>限制處理權：</strong>要求限制對您個人資料的處理</li>
              <li><strong>反對權：</strong>反對出於特定目的處理您的個人資料</li>
              <li><strong>數據可攜權：</strong>以結構化、常用和機器可讀的格式接收您的個人資料</li>
              <li><strong>撤回同意權：</strong>在處理基於同意的情況下，隨時撤回您的同意</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              如需行使這些權利，請通過本政策末尾提供的聯絡方式與我們聯繫。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 兒童隱私</h2>
            <p className="text-gray-600 leading-relaxed">
              本平台不針對18歲以下的兒童。我們不會有意收集兒童的個人資料。如果您認為我們可能持有兒童的資料，請立即聯絡我們，我們將採取措施刪除該資料。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. 跨境數據傳輸</h2>
            <p className="text-gray-600 leading-relaxed">
              您的個人資料可能被傳輸到並存儲在香港以外的地區。我們將確保採取適當的保障措施，以保護您的資料並遵守適用的數據保護法律。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. 政策更新</h2>
            <p className="text-gray-600 leading-relaxed">
              我們可能不時更新本隱私政策。更新後的政策將在本平台上公布，並註明「最後更新日期」。重大變更將通過電郵或平台通知告知您。請定期查看本政策以了解我們如何保護您的資料。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. 聯絡我們</h2>
            <p className="text-gray-600 leading-relaxed">
              如對本隱私政策有任何疑問、意見或要求，請通過以下方式聯絡我們：
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-900 font-semibold">Luna Skin 數據保護官</p>
              <p className="text-gray-600 mt-2">電郵：privacy@lunaskin.hk</p>
              <p className="text-gray-600">地址：香港</p>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              我們將在收到您的請求後30天內回覆。
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/">
            <Button size="lg">返回首頁</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

