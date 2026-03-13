import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsApp";

export function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
