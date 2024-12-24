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
            <div className="bg-[#4D4B2F] flex justify-center items-center my-10">
              <JourneyComponent />
            </div>
            <div className="flex justify-center items-center my-14 sm:px-5 md:px-14 xl:px-14">
              <Needhelp />
            </div>
          </Container>
          <FeatureCard/>
          <HowItWorks/>
          <Footer />
        </section>
      </main>
    </ThemeCustomization >
  );
}
