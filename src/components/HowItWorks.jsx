import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "./ui/Button";
import StepCard from "./StepCard";

const HowItWorks = ({ title, btntitle, stepData, image }) => {
  return (
    <section className="flex md:flex-col sm:flex-col xl:flex-col items-center md:items-start justify-between p-6 md:p-12 w-[80%] mx-auto">
      <div className="w-[55%] sm:w-full md:w-full xl:w-full">
        <Typography variant="h2" className="mb-10 w-[60%] sm:w-full md:w-full xl:w-full">
          {title}
        </Typography>
        <div className="w-[380px] sm:w-full md:w-full xl:w-full">
            {stepData.map((step, index) => (
              <StepCard
                key={index}
                title={step.title}
                description={step.description}
                isLastStep={index === stepData.length - 1}
              />
            ))}
        </div>
        <Button variant="outline" size="default" className=" mt-10 bg-primary-light">
          <Typography variant="button">{btntitle}</Typography>
        </Button>
      </div>
      <div className="sm:mt-10 md:mt-10 xl:mt-10 w-[45%] sm:w-full md:w-full xl:w-full">
        <Image
          src={image}
          alt="Phone Mockup"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
