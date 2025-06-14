"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

function NavLink({ href, children, icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-4 py-2 transition-colors duration-300 ease-linear text-[16px] font-semibold font-nunito leading-[24px] ${
        isActive
          ? "bg-[#D1B574] text-white"
          : "text-[#817F9B] hover:bg-accent hover:text-white"
      }`}
    >
      <span className="text-xl flex items-center justify-center align-middle">{icon}</span>
      <span className="flex items-center align-middle">{children}</span>
    </Link>
  );
}

export default NavLink;
