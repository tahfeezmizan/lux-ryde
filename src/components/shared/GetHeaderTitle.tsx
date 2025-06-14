"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GetHeaderTitle = () => {
  const [title, setTitle] = useState("Welcome Siam"); // default static title
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("Dashboard");
        break;
      case "/profile":
        setTitle("Your Profile");
        break;
      case "/settings":
        setTitle("Settings");
        break;

      default:
        setTitle("Welcome Back"); 
        break;
    }
  }, [pathname]);

  return (
    <div className="text-white lg:text-[22px] font-semibold leading-normal">
      {title}
    </div>
  );
};

export default GetHeaderTitle;
