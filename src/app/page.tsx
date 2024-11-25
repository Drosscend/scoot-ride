import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Map } from "@/components/map";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

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
  )
}

