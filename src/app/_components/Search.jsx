"use client";

import { useEffect, useState } from "react";

export function Search({ value, onChange }) {
  const [countries, setCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // ⬅️ нэмэгдсэн

  // 🌍 Fetch all countries & cities
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://countriesnow.space/api/v0.1/countries");
        const data = await res.json();
        setCountries(data.data);
      } catch (err) {
        console.error("Error fetching countries", err);
      }
    };

    fetchCountries();
  }, []);

  // 🔍 Filter matching cities
  useEffect(() => {
    if (!value) {
      setFilteredCities([]);
      return;
    }

    const matched = [];

    countries.forEach((country) => {
      country.cities.forEach((city) => {
        const searchValue = value.toLowerCase();
        const full = `${city}, ${country.country}`;
        if (full.toLowerCase().includes(searchValue)) {
          matched.push(full);
        }
      });
    });

    setFilteredCities(matched.slice(0, 4));
  }, [value, countries]);

  return (
    <div className="relative w-[320px]">
      {/* 🔍 Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
        onFocus={() => setShowSuggestions(true)}  // ⬅️ харагдуулна
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // ⬅️ даралт хийж байхад алга болохоос сэргийлнэ
        className="w-full px-4 py-2 rounded-full shadow bg-white text-black focus:outline-none"
      />

      {/* 📋 Suggestion list */}
      {showSuggestions && filteredCities.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-50 overflow-hidden">
          {filteredCities.map((city, i) => (
            <li
              key={i}
              onMouseDown={() => {
                onChange({ target: { value: city } });
                setShowSuggestions(false); // сонгох үед хаах
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            >
              <span>📍</span> {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
