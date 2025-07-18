"use client";

import { useEffect, useState } from "react";

export default function CountrySelector({ onCitySelect }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");


  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data); 
      })
      .catch((err) => console.error("Country fetch error:", err));
  }, []);


  useEffect(() => {
    if (!selectedCountry) return;
    const countryObj = countries.find((c) => c.country === selectedCountry);
    setCities(countryObj?.cities || []);
    setSelectedCity(""); 
  }, [selectedCountry]);


  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    onCitySelect(city);
  };

  return (
    <div className="flex flex-col gap-4 items-center">

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
