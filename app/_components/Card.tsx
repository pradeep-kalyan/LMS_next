import React from "react";

interface CardProps {
  title: string;
  value: string | number;

  w?: string; // e.g., "300px" or "w-[300px]"
  h?: string; // e.g., "150px" or "h-[150px]"
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  w = "w-[300px]",
  h = "h-[150px]",
}) => {
  return (
    <div
      className={`${w} ${h} p-8 bg-white/30 border-white border-2 flex flex-col justify-center items-center shadow-lg backdrop-blur-2xl gap-1 rounded-2xl`}
    >
      <h3>{title}</h3>
      <h2 className="font-semibold">{value}</h2>
    </div>
  );
};

export default Card;
