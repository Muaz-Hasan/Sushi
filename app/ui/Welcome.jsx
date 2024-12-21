import Balloons from "./Ballons";

export default function Welcome() {
  return (
    <div className="content container mx-auto w-full max-w-7xl min-h-screen p-4 flex flex-col justify-center items-center relative text-center">
      <Balloons />
      <h2 className="high-text">Addressing</h2>
      <h2 className="soldier-text">Some cheezy wholesome intro here</h2>
      <p className="p-6 text-xl font-bold">
        Click or touch for infinite flowers &lt;3
      </p>
      <div className="flex w-full justify-center space-x-4 items-center">
        <p className="text-xl font-bold">Scroll down slowly</p>
        <div className="scroll-indicator"></div>
      </div>
    </div>
  );
}
