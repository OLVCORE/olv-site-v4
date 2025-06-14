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
      className="platform-hero container mx-auto mt-6 mb-10 p-6 md:p-10 rounded-lg border border-accent shadow-lg grid gap-8 md:grid-cols-2 items-center"
      style={{ backgroundColor: platformColor }}
    >
      {/* Text Block */}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-accent-dark">
          {platformName}
        </h1>
        {platformDescription && (
          <p className="text-lg leading-relaxed opacity-90">
            {platformDescription}
          </p>
        )}
      </div>
      {/* Logo */}
      <div className="flex justify-center md:justify-end">
        <div className="logo-olv-padrao w-48 h-48 md:w-56 md:h-56">
          <Image src={platformLogo} alt={`${platformName} Logo`} fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
};

export default PlatformHero; 