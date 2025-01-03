"use client"
import React from 'react'
import ConnectComp from "@/components/ConnectComp"
import Container from '@/components/Container'
import ThemeCustomization from '@/themes'
import NewsLetter from '@/components/NewsLetter'
import Needhelp from '@/components/Needhelp'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import TradiesWork from '@/components/TradiesWork'
import ReviewComponent from "@/components/ReviewComponent"
import hero from '@/assets/Our-Tradies/HeroImage.png'
import ChatPopup from '@/components/ChatPopup'

const Page = () => {
    return (
        <ThemeCustomization>
            <Container>
                <Navbar />
                <HeroSection
                    title="Connect with our top tradies"
                    firstdesc="From roofers to cleaners, connect with highly skilled tradies across Australia and New Zealand."
                    btntitle="GET STARTED"
                    image={hero}
                />
                <ConnectComp ifPartner={false} />
                <TradiesWork />
                <ReviewComponent />
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