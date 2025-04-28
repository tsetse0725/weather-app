"use client";

import Image from "next/image";
import { SomeIcons } from "./SomeIcons";
import { MapPin } from "lucide-react";

export const Card = ({ date, city, path, degree, something }) => {
  return (
    <div className="w-[400px] h-[800px] rounded-2xl flex flex-col backdrop-blur-md shadow-md p-6 justify-between">
      <p className="text-sm text-gray-400">{date}</p>

      <div className="flex items-center gap-2">
        <p className={`text-2xl font-bold `}>{city}</p>
        <MapPin size={20} color="gray" />
      </div>

      <div className="flex justify-center">
        <Image src={path} alt="weather icon" width={270} height={270} />
      </div>

      <p className={`text-6xl font-bold text-center`}>
        {degree}
        <span className="text-4xl align-top">&deg;</span>
      </p>

      <p className="text-center text-lg text-yellow-400">{something}</p>

      <SomeIcons />
    </div>
  );
};
