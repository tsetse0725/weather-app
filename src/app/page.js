"use client";

import { useState, useEffect } from "react";
import { Card } from "@/app/_components/Card";
import { Search } from "@/app/_components/Search";
import { format } from "date-fns";
import Image from "next/image";

const WEATHER_API = "https://api.weatherapi.com/v1/forecast.json?key=899d9c2c0f5845838dc70138240912";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("Sydney");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!selectedCity) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(`${WEATHER_API}&q=${selectedCity}`);
        const data = await res.json();
        console.log(" Weather API response:", data);
        setWeatherData(data);
      } catch (err) {
        console.error(" Weather API fetch error:", err);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  const date = new Date();
  const formattedDate = format(date, "MM.dd.yyyy");


  const dayTemp = weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c ?? 26.8;
  const nightTemp = weatherData?.forecast?.forecastday[0]?.day?.mintemp_c ?? 13.7;
  const dayCondition = weatherData?.forecast?.forecastday[0]?.day?.condition?.text ?? "Sunny";
  const nightCondition = weatherData?.current?.condition?.text ?? "Clear"; 

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col">

      <div className="w-full flex justify-center mt-6 z-20">
        <Search
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value.includes(",")) {
              setSelectedCity(e.target.value.split(",")[0]);
            }
          }}
        />
      </div>

 
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/rings-center-logo.svg"
          alt=""
          width={500}
          height={500}
          className="opacity-80"
        />
      </div>


      <div className="relative z-10 flex flex-grow">
        <div className="w-1/2 flex items-center justify-center bg-[#f4f4f4]">
          <Card
            date={formattedDate}
            city={selectedCity}
            path="/sun.png"
            degree={dayTemp}
            something={dayCondition}
            variant="day"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center bg-[#0a0a14]">
          <Card
            date={formattedDate}
            city={selectedCity}
            path="/moon.png"
            degree={nightTemp}
            something={nightCondition}
            variant="night"
          />
        </div>
      </div>
    </div>
  );
}
