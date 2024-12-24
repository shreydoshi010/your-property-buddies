import React from 'react'
import CommunityCard from "@/components/CommunityCard";
import image1 from "@/assets/CommunityCard/rodion-kutsaiev-OV_9lkw0DaU-unsplash.png"
import image2 from "@/assets/CommunityCard/Artwork container.png"
import image3 from "@/assets/CommunityCard/Artwork container (2).png"
import image4 from "@/assets/CommunityCard/Avocado1.png"
import image5 from "@/assets/CommunityCard/Artwork container (1).png"
import image6 from "@/assets/CommunityCard/Avocado.png"
import { Button } from './ui/Button';
import { Typography } from '@mui/material';
import CarasoulCont from "@/components/ui/carasoul/CarasoulCont"

const CommunityComponent = () => {
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
        <div className=" bg-[#77722E0D]">
            <div className='w-[80%] mx-auto flex flex-col items-center justify-center gap-5 py-14 sm:hidden md:hidden'>
                <Typography variant="h2">Our real estate community of pros and tradies</Typography>
                <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 sm:w-full md:w-full xl:grid-cols-2 gap-10 xxl:gap-16 justify-items-center mt-5">
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
                <div className="flex sm:flex-col md:flex-col gap-8 md:gap-2 sm:gap-2">
                    <Button variant="outline" size="default" className="bg-primary-light mt-10">
                        <Typography variant="button">Get Started</Typography>
                    </Button>
                    <Button variant="outlinePrimary" size="default" className="mt-10 sm:mt-0 md:mt-0">
                        <Typography variant="button">DISCOVER MORE PROFESSIONALS</Typography>
                    </Button>
                </div>
            </div>
            {/* mobile Design start */}
            <div className='p-4 hidden sm:block md:block'>
                <Typography className='text-center' variant="h2">Find your real estate professionals</Typography>
                <CarasoulCont
                    options={{ dragFree: false }}
                    isDot={true}
                    classname="mt-10 gap-5"
                >
                    {properties.map((property, index) => (
                        <div key={index} className='w-[100%] sm:flex-[0_0_90%] md:flex-[0_0_50%]'>
                            <CommunityCard
                                title={property.title}
                                firstdesc={property.firstdesc}
                                imageUrl={property.imageUrl}
                                ownerdesc={property.ownerdesc}
                                seconddesc={property.seconddesc}
                            />
                        </div>
                    ))}
                </CarasoulCont>
                <div className="flex flex-col gap-5 px-2">
                    <Button variant="outline" size="default" className="bg-primary-light mt-10">
                        <Typography variant="button">Get Started</Typography>
                    </Button>
                    <Button variant="outlinePrimary" size="default">
                        <Typography variant="button">DISCOVER MORE PROFESSIONALS</Typography>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CommunityComponent