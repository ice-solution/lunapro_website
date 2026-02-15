import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

export default function Terms() {
  return (
    <PageLayout activePath="/terms">

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">服務使用條款</h1>
        <p className="text-gray-600 mb-8">最後更新日期：2025年10月19日</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. 接受條款</h2>
            <p className="text-gray-600 leading-relaxed">
              歡迎使用 Luna Skin B2B 批發平台（以下簡稱「本平台」）。本服務使用條款（以下簡稱「條款」）構成您與 Luna Skin（以下簡稱「我們」或「本公司」）之間具有法律約束力的協議。通過訪問或使用本平台，您確認已閱讀、理解並同意受本條款的約束。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              如果您代表公司或其他法律實體使用本平台，您聲明並保證您有權使該實體受本條款約束，在這種情況下，「您」將指該實體。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. 服務描述</h2>
            <p className="text-gray-600 leading-relaxed">
              Luna Skin B2B 平台為註冊會員提供美容產品批發服務，包括但不限於：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>產品瀏覽和訂購</li>
              <li>會員管理和權益</li>
              <li>訂單追蹤和配送</li>
              <li>專業培訓和諮詢服務</li>
              <li>行銷支持和資源</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. 會員資格與註冊</h2>
            <h3 className="text-xl font-bold mb-3 text-gray-900">3.1 資格要求</h3>
            <p className="text-gray-600 leading-relaxed">
              本平台僅向持有有效營業執照的合法經營美容業務的企業開放。申請會員時，您必須：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>提供真實、準確、完整的公司資料</li>
              <li>持有有效的香港商業登記證或相關營業執照</li>
              <li>具有合法的美容產品經營資格</li>
              <li>年滿18歲並具有完全民事行為能力</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900">3.2 帳號安全</h3>
            <p className="text-gray-600 leading-relaxed">
              您有責任維護帳號和密碼的安全性，並對在您帳號下進行的所有活動負責。如發現任何未經授權的使用，您應立即通知我們。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. 訂購與付款</h2>
            <h3 className="text-xl font-bold mb-3 text-gray-900">4.1 訂單處理</h3>
            <p className="text-gray-600 leading-relaxed">
              所有訂單需經過我們的確認才算成立。我們保留因產品缺貨、定價錯誤或其他原因拒絕或取消任何訂單的權利。
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900">4.2 價格與付款</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>所有價格以港幣（HKD）計算，並可能隨時調整</li>
              <li>會員折扣根據會員等級自動應用</li>
              <li>付款方式包括銀行轉帳、支票和賬期（視會員等級而定）</li>
              <li>逾期未付款項將收取滯納金</li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6 text-gray-900">4.3 配送</h3>
            <p className="text-gray-600 leading-relaxed">
              配送時間和運費根據會員等級和訂單金額而定。我們將盡力按時配送，但不對因不可抗力造成的延誤負責。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. 退換貨政策</h2>
            <p className="text-gray-600 leading-relaxed">
              如產品存在質量問題，您可在收貨後7天內申請退換貨。退換貨必須滿足以下條件：
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
              <li>產品包裝完整，未經使用</li>
              <li>提供清晰的質量問題照片證明</li>
              <li>保留原始發票和配送單據</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              非質量問題的退換貨需經過我們的審核批准，並可能產生相關費用。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. 知識產權</h2>
            <p className="text-gray-600 leading-relaxed">
              本平台的所有內容，包括但不限於文字、圖片、商標、標誌、設計、軟件代碼，均為 Luna Skin 或其授權方的知識產權。未經書面許可，您不得複製、修改、分發或以任何方式使用這些內容。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. 責任限制</h2>
            <p className="text-gray-600 leading-relaxed">
              在法律允許的最大範圍內，Luna Skin 對因使用或無法使用本平台而產生的任何直接、間接、偶然、特殊或後果性損害不承擔責任。我們的總責任不超過您在導致索賠的交易中支付的金額。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. 終止</h2>
            <p className="text-gray-600 leading-relaxed">
              我們保留隨時暫停或終止您的帳號和訪問權限的權利，特別是在您違反本條款的情況下。終止後，您仍需履行所有未完成的付款義務。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. 條款修改</h2>
            <p className="text-gray-600 leading-relaxed">
              我們保留隨時修改本條款的權利。修改後的條款將在本平台上公布，並自公布之日起生效。您在條款修改後繼續使用本平台，即表示接受修改後的條款。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. 適用法律與爭議解決</h2>
            <p className="text-gray-600 leading-relaxed">
              本條款受香港特別行政區法律管轄。因本條款引起的任何爭議應首先通過友好協商解決。如協商不成，應提交香港國際仲裁中心按其仲裁規則進行仲裁。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. 聯絡我們</h2>
            <p className="text-gray-600 leading-relaxed">
              如對本條款有任何疑問，請通過以下方式聯絡我們：
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-900 font-semibold">Luna Skin</p>
              <p className="text-gray-600 mt-2">電郵：info@lunaskin.hk</p>
              <p className="text-gray-600">地址：香港</p>
            </div>
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

