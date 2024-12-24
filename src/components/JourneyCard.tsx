import { Typography } from "@mui/material";
import React from "react";
import { Button } from "./ui/Button";

const JourneyCard = () => {
    return (
        <div className="bg-white p-6 rounded-xl w-[425px] mx-auto">
            <Typography variant="h3" className=" mb-4">
                Buying real estate and don’t know where to start?
            </Typography>
            <Typography variant="D_p1">
                Buyer’s Blueprint: Your complimentary standardised guide for buying real estate.
            </Typography>
            <Typography variant="D_p1">
                Explore our buying checklist, designed to guide you every step of the way.
            </Typography>
            <Button variant="outline" size="default" className="mt-4 w-full">
                <Typography variant="button">BUYER’S CHECKLIST</Typography>
            </Button>
        </div>
    );
};

export default JourneyCard;
