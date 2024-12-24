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
            <div className="flex bg-[#F8F8F5] justify-center items-center py-14 sm:px-5 md:px-14 xl:px-14">
              <Needhelp />
            </div>
            <Footer />
          </Container>
        </section>
      </main>
    </ThemeCustomization >
  );
}
