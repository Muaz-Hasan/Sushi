import Image from "next/image";

export default function HeroImages() {
  return (
    <div className="flex flex-col w-full min-h-fit space-y-2 justify-center items-center p-4">
      <div className="flex w-full h-1/2 space-x-2">
        <div className="w-3/5 flex flex-col justify-end items-end">
          <Image
            src="/template.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="object-cover rounded-2xl hover:scale-110 transition duration-300"
          />
        </div>
        <div className="w-2/5 h-full">
          <Image
            src="/template.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="object-cover rounded-2xl hover:scale-110 transition duration-300"
          />
        </div>
      </div>
      <div className="flex w-full h-1/2 space-x-2">
        <div className="w-2/5 h-full">
          <Image
            src="/template.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="object-cover rounded-2xl hover:scale-110 transition duration-300"
          />
        </div>
        <div className="w-3/5 h-full">
          <Image
            src="/template.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="object-cover rounded-2xl hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
