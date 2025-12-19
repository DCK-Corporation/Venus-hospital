import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { VisionMissionSection } from "@/components/home/VisionMissionSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WelcomeSection />
      <InternationalSection />
      <NewsSection />
      {/* <ServicesGrid /> */}
      {/* <AboutPreview /> */}
      {/* <VisionMissionSection /> */}
      <TrustSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
