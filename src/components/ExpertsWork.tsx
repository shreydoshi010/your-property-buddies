import React from 'react'
import HowItWorks from './HowItWorks'
import groupImg from "@/assets/Our-Experts/image1.png";

const ExpertsWork = () => {
    const stepData = [
        {
            title: "Tell us what you need",
            description: "Answer a few quick questions. It’s free and simple to say what you need.",
            isLastStep: false
        },
        {
            title: "Get Matched",
            description: "Check out your personalised shortlist of top experts and tradies.",
            isLastStep: false
        },
        {
            title: "Choose your perfect fit",
            description: "Browse their profiles and reviews before working with them.",
            isLastStep: true
        }
    ]
    return (
        <div>
            <HowItWorks title={"How it works"} stepData={stepData} btntitle={"Get Started"} image={groupImg} />
        </div>
    )
}

export default ExpertsWork