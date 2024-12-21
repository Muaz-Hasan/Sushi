"use client";

import { useState } from "react";
import Doors from "./ui/Doors";
import FlowerAnimation from "./ui/FlowerAnimation";
import Memories from "./ui/Memories";
import BackgroundAudio from "./ui/BackgroundAudio";

export default function Page() {
  const [hasAccess, setHasAccess] = useState(false);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const correctAnswer = "Sushi";

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setHasAccess(true);
      setError("");
    } else {
      setError("Incorrect answer. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center w-full px-4">
      {!hasAccess ? (
        <div className="bg-pink-200 p-8 mx-auto rounded-2xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4">
            Some question that only you two know the answer to. (Here ans is
            Sushi)
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={answer}
              onChange={handleInputChange}
              placeholder="Enter the name"
              className="w-full text-lg font-bold px-4 py-2 rounded-2xl focus:outline-none bg-pink-100"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-pink-400 text-white font-semibold rounded-2xl hover:bg-pink-300 focus:outline-none transition-colors duration-300"
            >
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      ) : (
        <>
          <BackgroundAudio />
          <Doors />
          <Memories />
        </>
      )}
    </main>
  );
}
