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

const Footer = () => {
    return (
        <footer className='relative'>
            <Image
                src={VectorLine}
                alt="Decorative Line"
                className="absolute inset-0"
            />
            <div className='bg-primary text-white'>
                <Image
                    src={FooterWave}
                    alt="Footer Wave"
                    className="-mt-1"
                />
                <div className='mx-14 pt-20 pb-10'>
                <div className='pb-10  flex justify-between'>
                    <div>
                        <Image src={logo} alt='logo' className='h-auto w-[172px]' width={100} height={100} />
                        <Typography variant='h4' className='mt-6'>From buying to selling real estate, we’ve got you covered!</Typography>
                        <div className='mt-10 '>
                            <ul className='flex gap-4'>
                                <li>
                                    <Link href='/'><Image src={Instagram} alt="instagram" /></Link>
                                </li>
                                <li>
                                    <Link href='/'><Image src={Linkedin} alt="instagram" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-20 mr-7'>
                        <div>
                        <Typography variant='h4'>Resources</Typography>
                        <ul className='flex flex-col gap-2 mt-4'>
                            <li><Link href='/'><Typography variant='body1'>Buyer checklist</Typography></Link></li>
                            <li><Link href='/'><Typography variant='body1'>Seller checklist</Typography></Link></li>
                            <li><Link href='/'><Typography variant='body1'>Experts directory</Typography></Link></li>
                            <li><Link href='/'><Typography variant='body1'>For professional</Typography></Link></li>
                        </ul>
                        </div>
                        <div>
                        <Typography variant='h4'>About</Typography>
                        <ul className='flex flex-col gap-2 mt-4'>
                            <li><Link href='/'><Typography variant='body1'>About us</Typography></Link></li>
                            <li><Link href='/'><Typography variant='body1'>Buyers/Owners FAQ</Typography></Link></li>
                            <li><Link href='/'><Typography variant='body1'>Professionals FAQ</Typography></Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='py-4 border-t border-b border-white flex justify-between'>
                    <Typography variant='body2'>© 2024 Your Property Buddies. All rights reserved.</Typography>
                    <div>
                        <ul className='flex gap-20'>
                            <li>
                                <Link href='/' className='flex gap-4'><Image src={ExternalLink} alt="link"/><Typography variant='body2'>Privacy policy</Typography></Link>
                            </li>
                            <li>
                                <Link href='/' className='flex gap-4'><Image src={ExternalLink} alt="link"/><Typography variant='body2'>Terms & conditions</Typography></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='text-base font-normal font-lato w-[750px]'>Nothing on this page constitutes legal advice. For specific legal advice related to real estate matters, please consult with a Real Estate Legal Expert.</p>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
