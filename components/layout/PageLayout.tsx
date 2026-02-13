import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  activePath?: string;
  showFooter?: boolean;
}

export default function PageLayout({
  children,
  activePath,
  showFooter = true,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation activePath={activePath} />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}


