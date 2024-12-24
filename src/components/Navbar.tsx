import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Button } from "./ui/Button";
import logo from "@/assets/logo.png";
import DownArrow from "@/assets/downArrow.svg";

const menuItems = [
  {
    name: "FOR BUYERS & OWNERS",
    submenu: [
      { label: "Buyer checklist" },
      { label: "Seller checklist" },
    ],
  },
  {
    name: "FOR PROS & TRADIES",
    submenu: [],
  },
  {
    name: "RESOURCES",
    submenu: [
      { label: "Our blog" },
      { label: "About us" },
      { label: "Professional FAQs" },
      { label: "Buyers/Owners FAQs" },
    ],
  },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-between items-center px-[50px] py-[20px] bg-primary">
      {/* Logo */}
      <div>
        <Image
          src={logo}
          alt="logo"
          className="h-auto w-40"
          width={209}
          height={67}
        />
      </div>

      {/* Menu */}
      <div>
        <ul className="flex gap-14">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <Typography variant="button" className="text-white">
                  {item.name}
                </Typography>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-secondary group-hover:w-full transition-all duration-300"></span>
                {item.submenu.length > 0 && (
                  <span
                    className={`transform transition-transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <Image src={DownArrow} alt="down-arrow" />
                  </span>
                )}
              </div>

              {/* Dropdown Content */}
              {item.submenu.length > 0 && (
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <ul>
                    {item.submenu.map((subitem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        <Typography variant="body2">{subitem.label}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-10">
        <Button variant="outline" size="default">
          <Typography variant="button">LOGIN</Typography>
        </Button>
        <Button variant="default" size="default">
          <Typography variant="button">GET STARTED</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
