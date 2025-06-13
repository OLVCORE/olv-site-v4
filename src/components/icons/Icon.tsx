"use client";

import Image from 'next/image';
import clsx from 'clsx';
import React from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<IconSize, number> = {
  xs: 12, // w-3
  sm: 16, // w-4
  md: 24, // w-6
  lg: 32, // w-8
  xl: 48, // w-12
};

interface IconProps {
  /** Local path inside /public or remote URL */
  src: string;
  /** Accessible alternative text */
  alt: string;
  /** Tailwind size token (defaults to md) */
  size?: IconSize;
  /** Additional Tailwind classes (margins, colors, etc.) */
  className?: string;
  /** If the image is animated or large, disable Next.js optimization */
  unoptimized?: boolean;
}

const Icon: React.FC<IconProps> = ({
  src,
  alt,
  size = 'md',
  className = '',
  unoptimized = true,
}) => {
  const dimension = sizeMap[size] ?? 24;

  return (
    <Image
      src={src}
      alt={alt}
      width={dimension}
      height={dimension}
      className={clsx(className)}
      unoptimized={unoptimized}
      priority={false}
    />
  );
};

export default Icon; 