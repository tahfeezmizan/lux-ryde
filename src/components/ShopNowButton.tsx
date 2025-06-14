import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  width?: string;
  height?: string;
  px?: string;
  py?: string;
  bgColor?: string;
  textColor?: string;
}

export default function ShopNowButton({
  text,
  href,
  width, // Default width
  height , // Default height
  px = "px-4", // Default horizontal padding
  py = "py-2", // Default vertical padding
  bgColor = "bg-gray", // Default background color
  textColor = "text-white", // Default text color
}: ButtonProps) {
  return (
    <div>
      <Link
        href={href}
        className={`${bgColor} ${textColor} ${width} ${height} ${px} ${py} flex justify-center items-center rounded-[24px] text-xs md:text-lg leading-[150%] font-medium hover:bg-rose-600 transition-colors`}
      >
        {text}
      </Link>
    </div>
  );
}
