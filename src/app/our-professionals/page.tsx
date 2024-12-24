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
import ProfessionWork from '@/components/ProfessionWork'
import GrowthComponent from '@/components/GrowthComponent'
import hero from '@/assets/Our-Professionals/HeroImage.png'

const Page = () => {
    return (
        <ThemeCustomization>
            <Container>
                <Navbar />
                <HeroSection
                    title="Where top notch real estate pros & tradies grow their business"
                    firstdesc="Are you dedicated to putting your clients first in everything you do?"
                    seconddesc="Join Your Property Buddies to seamlessly connect with prospective clients actively seeking your expertise, fostering lasting relationships and a steady workflow."
                    btntitle="GET STARTED"
                    image={hero} 
                />
                <GrowthComponent />
                <ConnectComp ifPartner={true} />
                <ProfessionWork />
                <NewsLetter />
                <Needhelp title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="FAQS" />
                <Footer />
            </Container>
        </ThemeCustomization>
    )
}

export default Page