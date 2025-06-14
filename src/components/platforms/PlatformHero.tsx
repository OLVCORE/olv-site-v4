import React from 'react';
import Image from 'next/image';

interface PlatformHeroProps {
  platformName: string;
  platformLogo: string;
  platformDescription?: string;
  platformColor?: string; // background tint if needed
}

const PlatformHero: React.FC<PlatformHeroProps> = ({
  platformName,
  platformLogo,
  platformDescription,
  platformColor = '#0a0f1d',
}) => {
  return (
    <section
      className="platform-hero w-full mt-10 mb-10 px-4 py-6 sm:px-8 md:px-10
                 flex flex-col md:flex-row items-center gap-6
                 rounded-lg border shadow-lg"
      style={{ backgroundColor: '#141c2f', borderColor: '#2a3448' }}
    >
      {/* Text Block */}
      <div className="flex-1 order-2 md:order-1 text-center md:text-left">
        <h1 className="text-3xl font-semibold mb-3 text-accent-dark">
          {platformName}
        </h1>
        {platformDescription && (
          <p className="text-gray-300 leading-relaxed">
            {platformDescription}
          </p>
        )}
      </div>

      {/* Banner / Logo */}
      <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-1/3">
        <div className="bg-[#0a0f1d] p-4 rounded-lg border border-[#2a3448] shadow-md">
          <Image
            src={platformLogo}
            alt={`${platformName} Logo`}
            width={460}
            height={460}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformHero; 