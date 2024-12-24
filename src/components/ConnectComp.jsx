"use client";
import React from "react";
import Image from "next/image";
import connect01 from "@/assets/connect01.svg";
import connect02 from "@/assets/connect02.svg";
import connect03 from "@/assets/connect03.svg";
import partner01 from "@/assets/partner01.svg";
import partner02 from "@/assets/partner02.svg";
import partner03 from "@/assets/partner03.svg";
import { Typography } from "@mui/material";
import { Button } from "./ui/Button";

function ConnectComp({ ifPartner }) {
  const cards = [
    {
      title: "Only top experts",
      description:
        "We screen all real estate experts to ensure you receive top-quality service.",
      imageUrl: connect01,
    },
    {
      title: "Visible Insurance Coverage",
      description:
        "We verify and clearly display public liability insurance status in each expert's profile.",
      imageUrl: connect02,
    },
    {
      title: "We’ve got your back",
      description:
        "We monitor ratings and reviews, if anything goes wrong we'll advocate for you.",
      imageUrl: connect03,
    },
  ];
  const cards02 = [
    {
      title: "Digital presence",
      description:
        "We connect you directly with prospective clients who are searching for your specific skills.",
      imageUrl: partner01,
    },
    {
      title: "No membership fees",
      description:
        "Our focus is on fostering a community with pros & tradies who provide exceptional customer care.",
      imageUrl: partner02,
    },
    {
      title: "Clients can book you",
      description:
        "If you’re the first to accept the referral details, you’ll have exclusive access to the prospective client. ",
      imageUrl: partner03,
    },
  ];
  return (
    <div className="bg-[#f8f8f5] pt-3 pb-10 w-full">
      <div className="mx-auto px-4  w-[95%] xl:w-[98%]">
        {/* <h2 className="text-2xl font-semibold mb-6">What do you need?</h2> */}
        <Typography
          variant="h2"
          className=" flex mx-auto justify-center text-center"
        >
          {ifPartner ? (
            <span>
              What makes Your Property Buddies
              <br />
              your perfect partner:
            </span>
          ) : (
            "Connect with confidence"
          )}
        </Typography>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6 mt-6 w-full">
          {ifPartner
            ? cards02.map((card, index) => (
                <div key={index} className="p-6 flex justify-between gap-x-4">
                  <div className="-mt-5">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto"
                    />
                  </div>
                  <div className="w-[80%]">
                    <Typography variant="h5">{card.title}</Typography>
                    <Typography variant="M_Caption" className="mt-2">
                      {card.description}
                    </Typography>
                  </div>
                </div>
              ))
            : cards.map((card, index) => (
                <div key={index} className="p-6 flex justify-between gap-x-4">
                  <div className="-mt-5">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto"
                    />
                  </div>
                  <div className="w-[80%]">
                    <Typography variant="h5">{card.title}</Typography>
                    <Typography variant="M_Caption" className="mt-2">
                      {card.description}
                    </Typography>
                  </div>
                </div>
              ))}
        </div>
        <div className="flex justify-center items-center">
        {ifPartner && (
          <Button
            variant="outline"
            size="default"
            className="bg-primary-light"
          >
            <Typography variant="button">Get Started</Typography>
          </Button>
        )}
        </div>
      </div>
    </div>
  );
}

export default ConnectComp;
