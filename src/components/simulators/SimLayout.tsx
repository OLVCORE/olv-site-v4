"use client";
import React from 'react';

interface Props {
  quotes: React.ReactNode;
  calculator: React.ReactNode;
  guide: React.ReactNode;
}

export default function SimLayout({ quotes, calculator, guide }: Props) {
  return (
    <div className="container mx-auto max-w-7xl space-y-10 pt-6 md:pt-8">
      <div className="grid gap-8 lg:grid-cols-[10cm_10cm_15cm] mt-[0.5cm]">
        <aside>{quotes}</aside>
        <section className="col-span-2 lg:col-start-2 lg:col-span-2">{calculator}</section>
      </div>
      <section>{guide}</section>
    </div>
  );
} 