"use client"
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ThemeCustomization from "@/themes";
import CommunityCard from "@/components/CommunityCard";
import image1 from "@/assets/CommunityCard/rodion-kutsaiev-OV_9lkw0DaU-unsplash.png"
import image2 from "@/assets/CommunityCard/Artwork container.png"
import image3 from "@/assets/CommunityCard/Artwork container (2).png"
import image4 from "@/assets/CommunityCard/Avocado1.png"
import image5 from "@/assets/CommunityCard/Artwork container (1).png"
import image6 from "@/assets/CommunityCard/Avocado.png"
import FeatureCard from "@/components/FeatureCard.jsx"
import HowItWorks from "@/components/HowItWorks.jsx"

export default function Home() {
  const properties = [
    {
      title: 'Mortgage broker',
      firstdesc: 'A mortgage broker ',
      imageUrl: image1,
      seconddesc: "helping them find and secure suitable mortgage options by negotiating terms and guiding them through the application process.",
      ownerdesc: 'connects individuals with lenders, '
    },
    {
      title: 'Property Lawyer or Conveyancer',
      firstdesc: 'A property lawyer, or real estate attorney, specialises in legal matters related to property transactions, providing advice, handling contracts, and ',
      imageUrl: image2,
      ownerdesc: 'facilitating ownership transfers.'
    },
    {
      title: 'Property Lawyer or Conveyancer',
      firstdesc: 'A real estate agent ',
      imageUrl: image3,
      seconddesc: "representing clients in buying or selling real estate. They leverage market knowledge to guide individuals, businesses, or investors, ensuring effective transactions.",
      ownerdesc: 'facilitates property transactions, '
    },
    {
      title: 'Interior and exterior cleaning',
      firstdesc: 'Exterior and interior cleaning companies refresh homes and businesses. From pressure washing to deep carpet cleaning, they enhance aesthetics and hygiene.',
      imageUrl: image4,
    },
    {
      title: 'Home staging or Property Styler',
      firstdesc: 'Home styling firms elevate spaces through expert decor choices. From furniture arrangement to colour schemes, they transform interiors for a faster sale.',
      imageUrl: image5,
    },
    {
      title: 'Property inspector',
      firstdesc: "Property inspectors ensure safety, assessing a property's condition for informed decisions, delivering comprehensive reports on structural integrity.",
      imageUrl: image6,
    }
  ];
  return (
    <ThemeCustomization>
      <main>
        <section>
          <Container>
            <h1 className="text-4xl font-bold ">Your Property Buddies</h1>
            <p className="">The best way to find trusted real estate professionals and tradies.</p>
            <div className="grid grid-cols-3 sm:bg-red-500 gap-5 bg-[#77722E0D] p-4 justify-between">
              {properties.map((property, index) => (
                <CommunityCard
                  key={index}
                  title={property.title}
                  firstdesc={property.firstdesc}
                  imageUrl={property.imageUrl}
                  ownerdesc={property.ownerdesc}
                  seconddesc={property.seconddesc}
                />
              ))}
            </div>
            <Navbar />
          </Container>
          <FeatureCard/>
          <HowItWorks/>
        </section>
      </main>
    </ThemeCustomization>
  );
}
