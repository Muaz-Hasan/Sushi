"use client";

import { useState, useEffect, useRef } from "react";
import { Source_Code_Pro } from "next/font/google";
import { TiHome } from "react-icons/ti";
import { LuCat } from "react-icons/lu";
import { PiFastForwardBold } from "react-icons/pi";

import styles from "./Quiz.module.css";
import Image from "next/image";
import Link from "next/link";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function Quiz() {
  const [message, setMessage] = useState("");
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "relative",
    top: "0px",
    left: "0px",
  });
  const [isYesClicked, setIsYesClicked] = useState(false); // State to track Yes button click
  const [displayText, setDisplayText] = useState(""); // State for typewriter effect
  const [typingComplete, setTypingComplete] = useState(false); // State to track typing completion

  const fullTextArray = [
    "some more text here like a yes no question or something",
    "(some incentive to choose yes here.)",
  ];

  const intervalRef = useRef(null); // Ref to store interval ID

  // Function to handle hover and click events for the "No" button
  const handleNoAction = () => {
    const randomTop = Math.floor(Math.random() * 200) + "px";
    const randomLeft = Math.floor(Math.random() * 200) + "px";

    setNoButtonStyle({
      position: "absolute",
      top: randomTop,
      left: randomLeft,
    });
  };

  // Function to handle "Yes" button click
  const handleYesClick = () => {
    setMessage(
      <>
        what happens if pressed yes?
        <br />
        what happens if pressed yes?
        <br />
        what happens if pressed yes?
      </>
    );
    setTimeout(() => {
      setIsYesClicked(true);
    }, 1000); // Adjust the delay (in milliseconds) as needed
  };

  // Function to create typewriter effect
  const typeWriter = (textArray, index, arrayIndex) => {
    if (arrayIndex < textArray.length) {
      const currentText = textArray[arrayIndex];
      if (index < currentText.length) {
        setDisplayText((prev) => prev + currentText[index]);
        intervalRef.current = setTimeout(
          () => typeWriter(textArray, index + 1, arrayIndex),
          60
        ); // Adjusted delay for slower typing speed
      } else {
        // Add line break and go to the next text part
        setDisplayText((prev) => prev + "\n"); // Adds a newline
        setTimeout(() => typeWriter(textArray, 0, arrayIndex + 1), 60); // Start typing the next text
      }
    } else {
      setTypingComplete(true); // Set typingComplete to true when typing is done
    }
  };

  // Function to skip typewriting and show full text
  const skipTypewriter = () => {
    clearTimeout(intervalRef.current); // Stop the typewriter
    setDisplayText(fullTextArray.join("\n")); // Immediately set the full text
    setTypingComplete(true); // Mark typing as complete
  };

  useEffect(() => {
    if (!isYesClicked) {
      setDisplayText(""); // Clear display text when condition changes
      setTypingComplete(false); // Reset typingComplete before starting
      typeWriter(fullTextArray, 0, 0); // Start typewriter effect

      return () => {
        clearTimeout(intervalRef.current); // Cleanup the interval on unmount or effect rerun
      };
    }
  }, [isYesClicked]);

  return (
    <div
      className={`container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-white w-full max-w-4xl ${sourceCodePro.className}`}
    >
      <div className="w-full flex justify-start z-20 mb-4 mt-4">
        <Link
          href="/"
          className={`p-2 bg-white rounded-full text-black text-base font-bold transition-all duration-300 ease-in-out flex items-center hover:bg-neutral-300`}
        >
          <TiHome size={24} />
        </Link>
        <Link
          href="/cat-and-light"
          className={`p-2 bg-white rounded-full text-black text-base font-bold transition-all duration-300 ease-in-out flex items-center ml-4 hover:bg-neutral-300`}
        >
          <LuCat size={24} />
        </Link>
        {!isYesClicked && (
          <button
            onClick={skipTypewriter}
            className={`p-2 bg-white rounded-full text-black text-base font-bold transition-all duration-300 ease-in-out flex items-center ml-auto hover:bg-neutral-300`}
          >
            <PiFastForwardBold size={24} />
          </button>
        )}
      </div>
      {isYesClicked ? (
        <div className="w-full top-0 flex flex-col justify-center items-center space-y-4 relative">
          <div className="w-full h-full flex flex-col sm:flex-row justify-between items-center pt-4">
            <p className="text-md md:text-xl mt-4 z-10">{message}</p>
            <Image
              src="/template.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-full max-w-60 h-auto rounded-xl m-4"
            />
          </div>
          <p className="p-4">
            some more texts
            <br />
            <br />
            some more texts
            <br />
            <br />
            some more texts
            <br />
            <br />
            some more texts
            <br />
            <br />
            some more texts
          </p>
        </div>
      ) : (
        <>
          <pre className="z-10 text-base w-full whitespace-pre-wrap">
            {displayText}
          </pre>
          {typingComplete && ( // Render buttons only when typing is complete
            <div className="relative w-full flex justify-center mt-8 space-x-4">
              <button onClick={handleYesClick} className={styles.btn}>
                Yes
              </button>
              <button
                onMouseEnter={handleNoAction}
                onClick={handleNoAction} // Add onClick handler
                style={noButtonStyle}
                className="border border-white text-white font-bold py-2 px-8 rounded-full z-20"
              >
                No
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
