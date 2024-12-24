import { Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import image01 from "@/assets/HomePage/1.svg";
import image02 from "@/assets/HomePage/2.svg";
import image03 from "@/assets/HomePage/3.svg";

function FeatureCard() {
  const cards = [
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
    <div className="bg-[#f8f8f5] py-10">
      <div className=" mx-auto px-4">
        {/* <h2 className="text-2xl font-semibold mb-6">What do you need?</h2> */}
        <Typography variant="h2" className=" flex mx-auto justify-center">
          What do you need?
        </Typography>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <div className=" w-[80%]">
                <Typography variant="h5">{card.title}</Typography>
                <Typography variant="M_Caption" className=" mt-2">
                  {card.description}
                </Typography>
              </div>
              <Button
                variant="outlinePrimary"
                size="default"
                className=" w-[115PX] mt-5"
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
}

export default FeatureCard;
