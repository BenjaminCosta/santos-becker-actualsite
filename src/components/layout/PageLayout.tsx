import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { ScrollToTop } from "./ScrollToTop";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="site-content flex-grow">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
