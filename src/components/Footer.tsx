import React from 'react';
import Image from 'next/image';
import VectorLine from '@/assets/VectorLine.svg';
import FooterWave from '@/assets/FooterWave.svg';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Top Line */}
      <div className="relative z-10">
        <Image
          src={VectorLine}
          alt="Decorative Line"
          className="w-full object-cover"
        />
      </div>

      {/* Footer Background */}
      <div className="bg-primary text-white relative -mt-10">
        <Image
          src={FooterWave}
          alt="Footer Wave"
          className="w-full object-cover"
        />
        {/* Add any footer content here */}
        <div className="p-4 text-center">
          <p>© 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
