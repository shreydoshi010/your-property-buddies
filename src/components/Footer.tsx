import React from 'react';
import Image from 'next/image';
import VectorLine from '@/assets/VectorLine.svg';
import FooterWave from '@/assets/FooterWave.svg';
import logo from '@/assets/logo.png';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Instagram from '@/assets/instagram.svg';
import Linkedin from '@/assets/linkedin.svg';
import ExternalLink from '@/assets/externalLink.svg';

const footerTabs = [
    {
        title: "Resources",
        links: [
            { label: "Buyer checklist", href: "/" },
            { label: "Seller checklist", href: "/" },
            { label: "Experts directory", href: "/" },
            { label: "For professional", href: "/" },
        ],
    },
    {
        title: "About",
        links: [
            { label: "About us", href: "/" },
            { label: "Buyers/Owners FAQ", href: "/" },
            { label: "Professionals FAQ", href: "/" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className='relative'>
            <Image
                src={VectorLine}
                alt="Decorative Line"
                className="absolute inset-0 w-full"
            />
            <div className='bg-primary text-white'>
                <Image
                    src={FooterWave}
                    alt="Footer Wave"
                    className="-mt-1 w-full"
                />
                <div className='mx-14 sm:mx-7 pt-20 pb-10'>
                    <div className='pb-10 flex justify-between sm:flex-col sm:gap-8'>
                        <div>
                            <Image src={logo} alt='logo' className='h-auto w-[172px]' width={100} height={100} />
                            <Typography variant='h4' className='mt-6'>From buying to selling real estate, we’ve got you covered!</Typography>
                            <div className='mt-10 sm:hidden'>
                                <ul className='flex gap-4'>
                                    <li>
                                        <Link href='/'><Image src={Instagram} alt="instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link href='/'><Image src={Linkedin} alt="linkedin" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-20 sm:gap-0 sm:justify-between mr-7 sm:mr-0'>
                            {footerTabs.map((tab, index) => (
                                <div key={index}>
                                    <Typography variant='h4'>{tab.title}</Typography>
                                    <ul className='flex flex-col gap-2 mt-4'>
                                        {tab.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.href}>
                                                    <Typography variant='body1'>{link.label}</Typography>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='sm:pb-7 xl:hidden md:hidden xxl:hidden'>
                        <ul className='flex gap-4'>
                            <li>
                                <Link href='/'><Image src={Instagram} alt="instagram" /></Link>
                            </li>
                            <li>
                                <Link href='/'><Image src={Linkedin} alt="linkedin" /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4 border-t border-b border-white flex justify-between sm:flex-col sm:gap-3'>
                        <Typography variant='body2'>© 2024 Your Property Buddies. All rights reserved.</Typography>
                        <div>
                            <ul className='flex gap-20 sm:gap-1 sm:justify-between sm:flex-col '>
                                <li>
                                    <Link href='/' className='flex gap-4'><Image src={ExternalLink} alt="link" /><Typography variant='body2'>Privacy policy</Typography></Link>
                                </li>
                                <li>
                                    <Link href='/' className='flex gap-4'><Image src={ExternalLink} alt="link" /><Typography variant='body2'>Terms & conditions</Typography></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <p className='text-base sm:text-[14px] font-normal font-lato w-[750px] sm:w-auto'>Nothing on this page constitutes legal advice. For specific legal advice related to real estate matters, please consult with a Real Estate Legal Expert.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
