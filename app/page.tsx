import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Insights } from "@/components/Insights";
import { Solutions } from "@/components/Solutions";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Solutions />
        <Industries />
        <Capabilities />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
