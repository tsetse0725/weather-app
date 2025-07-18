"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { SomeIcons } from "./SomeIcons";

export const Card = ({ date, city, path, degree, something, variant = "day" }) => {
  const isNight = variant === "night";

  return (
    <div
      className={`w-[360px] h-[700px] rounded-[32px] flex flex-col justify-between p-6 transition-all duration-300
        border shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[20px] backdrop-saturate-[180%]
        ${isNight
          ? "bg-[#0a0a14] border-white/20 text-white"
          : "bg-white/10 border-white/30 text-black"
        }`}
    >

      <p className="text-sm text-center text-gray-400">{date}</p>


      <div className="flex items-center justify-center gap-2">
        <p className="text-2xl font-bold">{city}</p>
        <MapPin size={20} color={isNight ? "#ccc" : "gray"} />
      </div>


      <div className="flex justify-center mt-4 mb-2">
        <Image src={path} alt="weather icon" width={230} height={230} />
      </div>


      <p className="text-[64px] font-bold text-center">
        {degree}
        <span className="text-4xl align-top">&deg;</span>
      </p>


      <p className="text-center text-lg text-yellow-400">{something}</p>

      <SomeIcons isNight={isNight} />
    </div>
  );
};
