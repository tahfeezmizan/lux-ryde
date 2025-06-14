import React from "react";
import Link from "next/link";

interface ViewMoreButtonProps {
  href: string;
  text?: string;
}

const ButtonProducts: React.FC<ViewMoreButtonProps> = ({ href, text = "View More" }) => {
  return (
    <Link
      href={href}
      className="mt-auto py-2 px-4 border text-center block border-gray text-gray hover:text-white hover:bg-gray rounded text-sm font-medium hover:bg-primary transition-colors"
    >
      {text}
    </Link>
  );
};

export default ButtonProducts;
