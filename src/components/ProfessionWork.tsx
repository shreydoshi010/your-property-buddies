import React from 'react'
import HowItWorks from './HowItWorks'
import groupImg from "@/assets/Our-Professionals/image1.png";

const ProfessionWork = () => {
    const stepData = [
        {
            title: "Submit your request online",
            description: "It takes less than two minutes to get started."
        },
        {
            title: "Get your application approved",
            description: "If we require more information from you we’ll be in touch."
        },
        {
            title: "Start getting recommended",
            description: "Your profile is visible and potential clients will be able to get in touch with you."
        }
    ]
    return (
        <div className='py-10'>
            <HowItWorks title={"How to partner with Your Property Buddies"} stepData={stepData} btntitle={"Get Started"} image={groupImg} />
        </div>
    )
}

export default ProfessionWork