import { Typography } from "@mui/material";

interface CommunityCardProps {
    stepNumber: number;
    title: string;
    description?: string;
    isLastStep: number;
}

const StepCard: React.FC<CommunityCardProps> = ({
    stepNumber,
    title,
    description,
    isLastStep
}) => {
    return (
        <div className="flex gap-4 items-start py-4 relative">
            <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center">
                <div className="w-4 h-4 bg-[#77722E] rounded-full"></div>
                {!isLastStep && (
                    <div className="absolute left-[15px] top-10 h-[100%] border-l border-[#77722E]"></div>
                )}
            </div>
            <div>
                <Typography variant="h4">{stepNumber}. {title}</Typography>
                <Typography variant="D_p2">
                    {description}
                </Typography>
            </div>
        </div>
    );
};

export default StepCard;