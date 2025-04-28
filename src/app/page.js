"use client";

import { useState } from "react";
import { Card } from "@/app/_components/Card";
import { format } from "date-fns";
import { Search } from "@/app/_components/Search";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const date = new Date();
  const formattedDate = format(date, "MM.dd.yyyy");
  const city = "Ulaanbaatar";
  const something = "Clear";

  return (
    <div className="relative w-screen h-screen">
      <Search
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="flex w-full h-full">
        <div className="w-1/2 bg-white flex items-center justify-center">
          <Card
            date={formattedDate}
            city={city}
            path="/sun.png"
            degree={0.2}
            something={something}
          />
        </div>

        <div className="w-1/2 bg-black flex items-center justify-center">
          <Card
            date={formattedDate}
            city={city}
            path="/moon.png"
            degree={-6.5}
            something={something}
          />
        </div>
      </div>
    </div>
  );
}
