// ProfilePhoto.tsx
import React from "react";

interface ProfilePhotoProps {
  name: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ name }) => {
  // Extract initials
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  // Generate background color based on the name
  const colors = [
    "bg-green-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center ${bgColor}`}
    >
      <span className="text-white text-2xl font-bold">{initials}</span>
    </div>
  );
};

export default ProfilePhoto;
