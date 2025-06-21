"use client";
import React, { useEffect } from 'react';

export default function ImportSimWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('import-sim');
    // remove tab focus from interactive elements outside the simulator to evitar loss of focus
    const toDisable = document.querySelectorAll('header a, nav a, aside a, footer a, header button, footer button');
    toDisable.forEach((el) => (el as HTMLElement).setAttribute('tabindex', '-1'));

    return () => document.body.classList.remove('import-sim');
  }, []);
  return <>{children}</>;
} 