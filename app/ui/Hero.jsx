import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row lg:space-x-4 w-full space-y-4 h-screen justify-center items-center mt-4 lg:mt-0">
      {/* HeroImages */}
      <div className="w-full max-w-sm lg:max-w-xl h-3/5 lg:h-full flex justify-center items-center p-4">
        <HeroImages />
      </div>

      {/* HeroText */}
      <div className="w-full max-w-lg flex flex-col justify-center items-center h-2/5 lg:h-full pointer-events-none">
        <h2 className="hero-text">Some text here</h2>
        <h2 className="hero-text">some text here</h2>
      </div>
    </div>
  );
}
