import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Catalog } from "@/components/catalog";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { WaveDivider } from "@/components/wave-divider";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { MapSection } from "@/components/map-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Wave separator before catalog */}
      <WaveDivider color="#f5f5f5" bgColor="white" />
      
      <Catalog />
      
      {/* Wave separator after catalog */}
      <WaveDivider color="white" bgColor="#f5f5f5" />
      
      <About />
      
      {/* Wave separator before contact */}
      <WaveDivider color="#C470A7" bgColor="white" />
      
      <Contact />
      
      {/* Wave separator after contact */}
      <WaveDivider color="white" bgColor="#C470A7" />
      
      <MapSection />
      
      {/* Wave separator before footer */}
      <WaveDivider color="#F7E7CE" bgColor="white" />
      
      <Footer />
      
      <CartDrawer />
      <WhatsAppButton />
    </main>
  );
}
