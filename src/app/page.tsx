"use client"
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ThemeCustomization from "@/themes";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard.jsx"
import HowItWorks from "@/components/HowItWorks.jsx"
import Footer from "@/components/Footer";
import JourneyComponent from "@/components/JourneyComponent";
import Needhelp from "@/components/Needhelp";
import CommunityComponent from "@/components/CommunityComponent";
import WhyUs from "@/components/WhyUs";
import NewsLetter from "@/components/NewsLetter";
import ConnectComp from "@/components/ConnectComp.jsx"

export default function Home() {

  return (
    <ThemeCustomization>
      <main>
        <section>
          <Container>
            <Navbar />
            <HeroSection />
            <FeatureCard />
            <HowItWorks />
            <CommunityComponent />
            <WhyUs />
            <JourneyComponent />

            <NewsLetter />

            <Needhelp />

            <Footer />
            <ConnectComp ifPartner={true}/>
          </Container>
        </section>
      </main>
    </ThemeCustomization >
  );
}
