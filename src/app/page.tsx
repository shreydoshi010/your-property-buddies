"use client"
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ThemeCustomization from "@/themes";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard.jsx"
import Footer from "@/components/Footer";
import JourneyComponent from "@/components/JourneyComponent";
import Needhelp from "@/components/Needhelp";
import CommunityComponent from "@/components/CommunityComponent";
import WhyUs from "@/components/WhyUs";
import NewsLetter from "@/components/NewsLetter";
import HowitworkComponent from "@/components/HowitworkComponent";
import ChatPopup from "@/components/ChatPopup";

export default function Home() {

  return (
    <ThemeCustomization>
      <main>
        <section>
          <Container>
            <Navbar />
            <HeroSection />
            <FeatureCard />
            <HowitworkComponent />
            <CommunityComponent />
            <WhyUs />
            <JourneyComponent />
            <NewsLetter />
            <Needhelp className="sm:hidden md:hidden xl:hidden" title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="Get Started" />
            <Needhelp className="hidden sm:block  md:block xl:block" title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="FAQS" />
            <ChatPopup />
            <Footer />
          </Container>
        </section>
      </main>
    </ThemeCustomization >
  );
}
