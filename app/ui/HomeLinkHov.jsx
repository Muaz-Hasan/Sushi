"use client";

import { useState } from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export default function HomeLinkHov() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full flex justify-start z-20 mb-4 mt-4">
      <Link
        href="/"
        className={`p-2 bg-white rounded-full text-black text-base font-bold transition-all duration-300 ease-in-out flex items-center ${
          hovered ? "px-4" : ""
        }`} // Adjust padding on hover
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaAngleLeft className={`text-xl ${hovered ? "mr-2" : ""}`} />
        {hovered ? (
          <span
            className={`transition-opacity duration-300 ease-in-out ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            Go back to home
          </span>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
}
