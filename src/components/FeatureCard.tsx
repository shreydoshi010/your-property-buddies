import { Typography } from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/Button";
import image01 from "@/assets/HomePage/1.svg";
import image02 from "@/assets/HomePage/2.svg";
import image03 from "@/assets/HomePage/3.svg";

interface Card {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: StaticImageData | string;
}

const FeatureCard: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Learn real estate for free",
      description:
        "BrickMaster is a free and fun way to learn how to navigate the real estate market.",
      buttonText: "Play now",
      imageUrl: image01,
    },
    {
      title: "Top real estate experts",
      description:
        "From staging your home to securing your mortgage, find your perfect fit.",
      buttonText: "Learn more",
      imageUrl: image02,
    },
    {
      title: "Top tradies",
      description:
        "From roofers to cleaners, connect with skilled tradies to get the job done right.",
      buttonText: "Learn more",
      imageUrl: image03,
    },
  ];

  return (
    <div className="bg-[#f8f8f5] pt-3 pb-10 w-full">
      <div className="mx-auto px-4 w-[95%] xl:w-[98%]">
        <Typography variant="h2" className="flex mx-auto justify-center">
          What do you need?
        </Typography>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6 mt-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="w-[80%]">
                <Typography variant="h5">{card.title}</Typography>
                <p className="M_Caption mt-2">
                  {card.description}
                </p>
              </div>
              <Button
                variant="outlinePrimary"
                size="default"
                className="w-[115px] mt-5"
              >
                <Typography variant="button">{card.buttonText}</Typography>
              </Button>
              <div className="absolute mb-4 right-4 top-16">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
