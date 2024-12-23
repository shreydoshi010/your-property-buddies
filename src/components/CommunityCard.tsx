import Image from 'next/image';
import React from 'react';

interface CommunityCardProps {
  title: string;
  firstdesc: string;
  imageUrl: any;
  ownerdesc?: string;
  seconddesc?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ title, firstdesc, imageUrl, ownerdesc, seconddesc }) => {
  return (
    <div className="border-2 border-[#E8E8E8] rounded-xl shadow-md w-[350px] min-h-max">
      <Image src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-xl" />
      <div className="p-4 text-[#02010D]">
        <h2 className="text-lg font-bold ">{title}</h2>
        <div className="mt-2 text-base">
          <span>{firstdesc}</span>
          <span className='font-bold'>
            {ownerdesc}
          </span>
          <span>{seconddesc}</span>
        </div>
      </div>
    </div>

  );
};

export default CommunityCard;
