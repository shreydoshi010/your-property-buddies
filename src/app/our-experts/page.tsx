"use client"
import React from 'react'
import ConnectComp from "@/components/ConnectComp"
import Container from '@/components/Container'
import ExpertsWork from '@/components/ExpertsWork'
import CommunityComponent from '@/components/CommunityComponent'
import ThemeCustomization from '@/themes'
import NewsLetter from '@/components/NewsLetter'
import Needhelp from '@/components/Needhelp'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import hero from '@/assets/Our-Experts/HeroImage.png'
import ChatPopup from '@/components/ChatPopup'

const Page = () => {
    return (
        <ThemeCustomization>
            <Container>
                <Navbar />
                <HeroSection
                    title="Connect with our top real estate experts"
                    firstdesc="From staging your home to securing your mortgage. Access top real estate experts across Australia and New Zealand."
                    btntitle="GET STARTED"
                    image={hero}
                />
                <ConnectComp ifPartner={false} />
                <ExpertsWork />
                <CommunityComponent />
                <NewsLetter />
                <Needhelp className="sm:hidden md:hidden xl:hidden" title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="Get Started" />
                <Needhelp className="hidden sm:block  md:block xl:block" title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="FAQS" />
                <ChatPopup />
                <Footer />
            </Container>
        </ThemeCustomization>
    )
}

export default Page