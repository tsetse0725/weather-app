"use client";

import { House, MapPin, Heart, User } from "lucide-react";

export const SomeIcons = ({ textColor }) => {
  return (
    <div className="flex justify-center gap-8 mt-4">
      <House size={24} />
      <MapPin size={24} />
      <Heart size={24} />
      <User size={24} />
    </div>
  );
};
