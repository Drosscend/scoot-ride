import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Map } from "@/components/map";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Map />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
