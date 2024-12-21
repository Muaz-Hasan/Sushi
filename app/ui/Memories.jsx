"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Hero from "./Hero";
import ScrollingImages from "./imageSlider/ScrollingImages";
import Welcome from "./Welcome";
import BlossomSceneComponent from "./BlossomSceneComponent";
import { ScrollProvider } from "../contexts/ScrollContext";
import FlowerAnimation from "./FlowerAnimation";

export default function Memories() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollPos(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Welcome component: opacity 1 -> 0 as user scrolls
  const welcomeOpacity = Math.max(1 - scrollPos / 300, 0);
  const welcomeScale = Math.max(1 - scrollPos / 400, 0.8);

  // Hero component: opacity 0 -> 1 as Welcome fades out, then 1 -> 0 as ScrollingImages fades in
  const heroOpacity =
    scrollPos < 900
      ? Math.min(Math.max((scrollPos - 300) / 300, 0), 1) // Fade in
      : Math.max(1 - (scrollPos - 900) / 300, 0); // Fade out

  const heroScale =
    scrollPos < 900
      ? Math.max(1.2 - (scrollPos - 300) / 300, 1) // Scale up during fade in
      : Math.max(1 - (scrollPos - 900) / 600, 0.8); // Scale down during fade out

  // ScrollingImages component: opacity 0 -> 1 as Hero fades out, then 1 -> 0 as BlossomSceneComponent fades in
  const imagesOpacity =
    scrollPos < 1500
      ? Math.min(Math.max((scrollPos - 900) / 300, 0), 1) // Fade in
      : Math.max(1 - (scrollPos - 1500) / 300, 0); // Fade out

  const imagesScale = Math.max(1.2 - (scrollPos - 900) / 600, 1);

  // BlossomSceneComponent: opacity 0 -> 1 as ScrollingImages fades out
  const blossomOpacity = Math.min(Math.max((scrollPos - 1500) / 300, 0), 1);

  return (
    <ScrollProvider>
      <div style={{ position: "relative", height: "400vh" }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "opacity 1s, transform 1s",
            opacity: welcomeOpacity,
            transform: `scale(${welcomeScale})`,
          }}
        >
          <FlowerAnimation />
          <Welcome />
        </div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "opacity 1s, transform 1s",
            opacity: heroOpacity,
            transform: `scale(${heroScale})`,
            pointerEvents: heroOpacity < 1 ? "none" : "auto", // Disable pointer events until opacity reaches 1
          }}
        >
          <Hero />
        </div>
        <div
          className="pointer-events-none"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "opacity 1s, transform 1s",
            opacity: imagesOpacity,
            transform: `scale(${imagesScale})`,
          }}
        >
          <ScrollingImages />
        </div>
        <div
          className="z-0"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "opacity 1s, pointer-events 1s",
            opacity: blossomOpacity,
            pointerEvents: blossomOpacity < 1 ? "none" : "auto",
          }}
        >
          <div className="absolute container mx-auto w-full max-w-3xl min-h-screen flex flex-col justify-center items-start text-2xl font-bold p-8">
            <p className="text-xl font-bold">
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
              some more cheesy text here <br />
            </p>
            <Link
              href="our-timeline"
              className="z-20 px-3 text-center text-lg sm:text-xl py-2 mt-4 bg-pink-200 border-2 hover:scale-105 transition-transform duration-300 ease-in-out border-pink-300 rounded-2xl cursor-pointer"
            >
              Another page
            </Link>
          </div>
          <div className="z-10">
            <BlossomSceneComponent />
          </div>
        </div>
      </div>
    </ScrollProvider>
  );
}
