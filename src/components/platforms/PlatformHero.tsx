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
      className="platform-hero w-full mt-6 mb-10 rounded-lg border border-accent shadow-lg overflow-hidden
        px-4 py-6 sm:px-6 md:px-10
        flex flex-col md:grid md:grid-cols-2 gap-6 items-center"
      style={{ backgroundColor: platformColor }}
    >
      {/* Logo (shown on top in mobile, right on desktop) */}
      <div className="flex justify-center md:justify-end order-first md:order-last">
        <div className="logo-olv-padrao w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 transition-transform duration-300 hover:scale-105">
          <Image
            src={platformLogo}
            alt={`${platformName} Logo`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Text Block */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-accent-dark">
          {platformName}
        </h1>
        {platformDescription && (
          <p className="text-base sm:text-lg leading-relaxed opacity-90">
            {platformDescription}
          </p>
        )}
      </div>
    </section>
  );
};

export default PlatformHero; 