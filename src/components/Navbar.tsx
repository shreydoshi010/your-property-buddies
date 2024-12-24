import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Button } from "./ui/Button";
import logo from "@/assets/logo.png";
import DownArrow from "@/assets/downArrow.svg";
import close from "@/assets/close.svg";

const menuItems = [
  {
    name: "FOR BUYERS & OWNERS",
    submenu: [
      { label: "Buyer checklist" },
      { label: "Seller checklist" },
      { label: "Our experts" },
      { label: "Our tradies" },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable scrolling on the body when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
      document.body.style.height = "100%"; // Prevent scrolling further
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset scroll behavior on unmount
      document.body.style.height = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex sm:hidden justify-between items-center px-[50px] py-[20px] bg-primary">
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
                    <ul className="p-2">
                      {item.submenu.map((subitem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 rounded-[8px] hover:bg-[#DEDDCD] cursor-pointer"
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

      {/* Mobile Navbar */}
      <div className="md:hidden xl:hidden xxl:hidden flex justify-between items-center px-4 py-3 bg-primary">
        <Image src={logo} alt="logo" width={150} height={50} />

        {/* Hamburger Menu */}
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-primary text-white flex pt-14 flex-col z-50">
          {/* Close Button */}
          <div className="flex justify-end items-center px-4 py-3 bg-primary">
            <button
              className="text-white focus:outline-none text-lg font-bold flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CLOSE
              <Image src={close} alt="close" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-4">
            <ul className="flex flex-col gap-7 mt-12">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    <Typography variant="button">{item.name}</Typography>
                    {item.submenu.length > 0 && (
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      >
                        <Image
                          src={DownArrow}
                          alt="down-arrow"
                          className={`transform transition-transform ${
                            openIndex === index ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu.length > 0 && openIndex === index && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {item.submenu.map((subitem, subIndex) => (
                        <li key={subIndex}>
                          <Typography variant="body2">
                            {subitem.label}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky Buttons */}
          <div className="px-4 py-3 bg-primary">
            <div className="flex gap-4">
              <Button variant="outline" size="default" className="w-full">
                LOGIN
              </Button>
              <Button variant="default" size="default" className="w-full">
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
