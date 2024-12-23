import { Typography } from "@mui/material";
import React from "react";

const BuyersChecklist: React.FC = () => {
    return (
        <div className="bg-white rounded-md">
            <Typography variant="h3" style={styles.title}>
                Buying real estate and don’t know where to start?
            </Typography>
            <Typography variant="D_p1" style={styles.subtitle}>
                Buyer’s Blueprint: Your complimentary standardised guide for buying real estate.
            </Typography>
            <Typography variant="D_p1" style={styles.description}>
                Explore our buying checklist, designed to guide you every step of the way.
            </Typography>
            <button style={styles.button}>BUYER’S CHECKLIST</button>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "#555033", // Olive-like color
        color: "#fff", // White text
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center" as const,
        maxWidth: "300px",
        margin: "0 auto",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold" as const,
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "14px",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        marginBottom: "20px",
    },
    button: {
        backgroundColor: "#6B6535", // Slightly darker olive
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontWeight: "bold" as const,
        cursor: "pointer",
    },
};

export default BuyersChecklist;
