import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "./ui/Button";
import image from "@/assets/Our-Tradies/image2.png";

const ReviewComponent = () => {
    return (
        <div className="bg-[#F8F8F5] py-10">
            <section className="flex md:flex-col-reverse sm:flex-col-reverse gap-5 xl:flex-col-reverse items-center md:items-start justify-center p-6 md:p-12 w-[80%] mx-auto">
                <div className="sm:mt-10 md:mt-10 xl:mt-10 w-[55%] sm:w-full md:w-full xl:w-full">
                    <Image
                        loading="lazy"
                        src={image}
                        alt="Phone Mockup"
                        className="rounded-lg"
                    />
                </div>
                <div className="text-start w-[45%] sm:w-full md:w-full xl:w-full">
                    <Typography variant="h2" className="mb-5">
                        Reviews
                    </Typography>
                    <p className="D_p1 mb-8">
                        Once the job is done, pay the tradie directly and place a review to help other homeowners.
                    </p>
                    <Typography variant="h4" className="mb-2">
                        Have a question or need a hand?
                    </Typography>
                    <p className="D_p1 mb-8">
                        Feel free to phone, live chat, or email our dedicated team - we&apos;re here to help!
                    </p>
                    <Button variant="outline" size="default" className="mt-10 bg-primary-light sm:w-full md:w-full xl:w-full">
                        <Typography variant="button">Get started</Typography>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ReviewComponent;
