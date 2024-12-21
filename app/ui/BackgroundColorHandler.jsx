"use client";

import React from "react";
import { useScroll } from "../contexts/ScrollContext";
import { usePathname } from "next/navigation";

const BackgroundColorHandler = () => {
  const scrollPos = useScroll();
  const pathname = usePathname(); // Use usePathname to get the current route

  const getBackgroundColor = () => {
    if (pathname !== "/") {
      return "bg-black"; // Background color for non-home pages
    }

    if (scrollPos < 400) {
      return "bg-blue-200"; // When Welcome component is visible
    } else if (scrollPos < 1800) {
      return `bg-pink-200`; // Keep the pink background
    } else {
      return "bg-blue-200"; // Ensure background remains blue if scrollPos exceeds this point
    }
  };

  return (
    <div
      className={`fixed inset-0 transition-colors duration-1000 ease-in-out ${getBackgroundColor()}`}
    />
  );
};

export default BackgroundColorHandler;
