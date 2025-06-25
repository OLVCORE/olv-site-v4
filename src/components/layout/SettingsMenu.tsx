"use client";

import React, { useEffect, useState } from "react";
import { FaCog, FaCheck } from "react-icons/fa";

// Available theme options
const themeOptions = [
  { value: "system", label: "Sistema" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
] as const;

type ThemeValue = (typeof themeOptions)[number]["value"];

// Utility: apply theme classes to <body>
function applyTheme(theme: ThemeValue) {
  const body = document.body;
  body.classList.remove("theme-light", "theme-dark");

  if (theme === "system") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    body.classList.add(prefersDark ? "theme-dark" : "theme-light");
  } else {
    body.classList.add(`theme-${theme}`);
  }
}

const SettingsMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeValue>("system");

  // Load initial value
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as ThemeValue | null) ?? "system";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const handleSelect = (value: ThemeValue) => {
    setTheme(value);
    localStorage.setItem("theme", value);
    applyTheme(value);
    setOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".settings-menu-wrapper")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="settings-menu-wrapper relative">
      <button
        aria-label="Abrir configurações"
        className="settings-trigger flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-700/20 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaCog size={18} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-md border border-gray-600 bg-[var(--color-surface)] shadow-lg z-[2600] p-2"
        >
          <h4 className="px-2 pb-1 text-xs uppercase tracking-wide opacity-70">
            Tema
          </h4>
          <ul className="flex flex-col gap-1">
            {themeOptions.map((opt) => (
              <li key={opt.value}>
                <button
                  className="flex w-full items-center justify-between rounded px-2 py-1 text-sm hover:bg-gray-700/30"
                  onClick={() => handleSelect(opt.value)}
                >
                  {opt.label}
                  {opt.value === theme && <FaCheck size={12} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu; 