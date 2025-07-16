"use client";

import { useEffect, useState } from "react";

export default function CountrySelector({ onCitySelect }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // 🌍 Fetch all countries
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data); // [{country: "Afghanistan", cities: [...]}, ...]
      })
      .catch((err) => console.error("Country fetch error:", err));
  }, []);

  // 🏙️ Update cities when a country is selected
  useEffect(() => {
    if (!selectedCountry) return;
    const countryObj = countries.find((c) => c.country === selectedCountry);
    setCities(countryObj?.cities || []);
    setSelectedCity(""); // reset city
  }, [selectedCountry]);

  // 🔄 Handle city change and notify parent
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    onCitySelect(city);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* 🌐 Country Selector */}
      <select
        className="p-2 border rounded w-64"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((c) => (
          <option key={c.country} value={c.country}>
            {c.country}
          </option>
        ))}
      </select>

      {/* 🏙️ City Selector */}
      {cities.length > 0 && (
        <select
          className="p-2 border rounded w-64"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
