"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";

type CardProps = {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (venueName: string, rating: number) => void;
};

export default function Card({
  venueName,
  imgSrc,
  rating,
  onRatingChange,
}: CardProps) {
  return (
    <div className="w-[250px] h-[300px] bg-white rounded-lg shadow-lg m-4">
      <div className="w-full h-[70%] relative rounded-t-lg overflow-hidden">
        <Image
          src={imgSrc}
          alt="Venue Picture"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full h-[30%] p-[10px]">
        <div className="text-[16px] font-semibold text-gray-800 mb-2">{venueName}</div>

        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, newValue) => {
            onRatingChange(venueName, newValue ?? 0);
          }}
        />
      </div>
    </div>
  );
}