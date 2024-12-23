import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import groupImg from "@/assets/HomePage/Group.svg";
import pointImg from "@/assets/HomePage/pointLine.svg";
import { Button } from "./ui/Button";

const HowItWorks = () => {
  return (
    <section className="flex md:flex-row items-center md:items-start justify-between p-6 md:p-12 w-[80%] mx-auto">
      {/* Text Section */}
      <div className="max-w-lg pt-12">
        <Typography variant="h2" className="mb-10">
          How it works
        </Typography>
        <div className=" flex items-start gap-x-5">
          <div>
            <Image src={pointImg} alt="point image" className="" />
          </div>
          <div className="space-y-4 -mt-[6px]">
            <div className="flex items-start space-x-4">
              <div>
                <Typography variant="h4">1. Tell us what you need</Typography>
                <Typography variant="D_p2">
                  Answer a few quick questions. It’s free and simple to say what
                  you need.
                </Typography>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  2. Get Matched
                </h3>
                <p className="text-gray-600">
                  Check out your personalised shortlist of top experts and
                  tradies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  3. Choose your perfect fit
                </h3>
                <p className="text-gray-600">
                  Browse their profiles and reviews before working with them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button variant="outline" size="default" className=" mt-10">
          <Typography variant="button">Get Started</Typography>
        </Button>
      </div>

      {/* Image Section */}
      <div className="">
        <Image
          src={groupImg}
          alt="Phone Mockup"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HowItWorks;