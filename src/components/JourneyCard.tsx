import { Typography } from "@mui/material";
import React from "react";
import { Button } from "./ui/Button";
interface JourneyCardProps {
    title: string;
    firstdesc: string;
    seconddesc?: string;
    btntitle: string;
}


const JourneyCard: React.FC<JourneyCardProps> = ({ title, btntitle, firstdesc, seconddesc }) => {
    return (
        <div className="bg-white p-6 rounded-xl w-[425px] mx-auto sm:w-full md:w-full">
            <Typography variant="h3" className=" mb-4">
                {title}
            </Typography>
            <Typography variant="D_p1">
                {firstdesc}
            </Typography>
            <Typography variant="D_p1">
                {seconddesc}
            </Typography>
            <Button variant="outline" size="default" className="bg-primary-light mt-4 w-full">
                <Typography variant="button">{btntitle}</Typography>
            </Button>
        </div>
    );
};

export default JourneyCard;
