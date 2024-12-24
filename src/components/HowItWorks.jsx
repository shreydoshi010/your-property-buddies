import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "./ui/Button";
import StepCard from "./StepCard";

const HowItWorks = ({ title, btntitle, stepData, image }) => {
  return (
    <section className="flex md:flex-col sm:flex-col xl:flex-col items-center md:items-start justify-between p-6 md:p-12 w-[80%] mx-auto">
      <div className="">
        <Typography variant="h2" className="mb-10">
          {title}
        </Typography>
        <div className=" flex items-start gap-x-5 w-[380px]">
          <div className="flex flex-col">
            {stepData.map((step, index) => (
              <StepCard
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                isLastStep={index === stepData.length - 1}
              />
            ))}
          </div>
        </div>
        <Button variant="outline" size="default" className=" mt-10 bg-primary-light">
          <Typography variant="button">{btntitle}</Typography>
        </Button>
      </div>
      <div className="sm:mt-10 md:mt-10 xl:mt-10">
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
