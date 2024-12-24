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

const Page = () => {
    return (
        <ThemeCustomization>
            <Container>
                <Navbar />
                <HeroSection />
                <ConnectComp ifPartner={false} />
                <ExpertsWork />
                <CommunityComponent />
                <NewsLetter />
                <Needhelp className="sm:hidden md:hidden xl:hidden" title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="Get Started" />
                <Needhelp className="hidden sm:block  md:block xl:block" title="Need help with real estate?" firstdesc="We’re here for you, let’s get started!" btntitle="FAQS" />
                <Footer />
            </Container>
        </ThemeCustomization>
    )
}

export default Page