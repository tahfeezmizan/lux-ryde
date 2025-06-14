"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";

import Dashboard from "../icon/Dashboard";
import Settings from "../icon/Settings";
import Message from "../icon/Messege";
import Financial from "../icon/Financial";
import Users from "../icon/Users";
import Dispatch from "../icon/Dispatch";
import Rider from "../icon/Rider";
import { useGetmeQuery } from "@/redux/api/authApi";

function Sidebar() {
  const { data } = useGetmeQuery({});
  const userRole = data?.data?.role || "ADMIN";
  const router = useRouter();

  // All possible links with allowed roles
  const navLinks = [
    {
      icon: <Dashboard />,
      href: "/dashboard",
      label: "Dashboard",
      roles: ["USER", "ADMIN"],
    },
    {
      icon: <Dispatch />,
      href: "/dashboard/myorder",
      label: "My Order",
      roles: ["USER"],
    },

    {
      icon: <Dispatch />,
      href: "/dashboard/dispatch",
      label: "Dispatch",
      roles: ["ADMIN"],
    },
    {
      icon: <Dispatch />,
      href: "/dashboard/coupon",
      label: "Coupon",
      roles: ["ADMIN"],
    },
    {
      icon: <Users />,
      href: "/dashboard/user-management",
      label: "User Management",
      roles: ["ADMIN"],
    },
    {
      icon: <Rider />,
      href: "/dashboard/rider-management",
      label: "Rider Management",
      roles: ["ADMIN"],
    },
    {
      icon: <Rider />,
      href: "/dashboard/driver-management",
      label: "Driver Management",
      roles: ["ADMIN"],
    },
    {
      icon: <Financial />,
      href: "/dashboard/financial-management",
      label: "Financial Management",
      roles: ["ADMIN"],
    },
    {
      icon: <Message />,
      href: "/dashboard/help-support",
      label: "Help & Support",
      roles: ["ADMIN"],
    },
    {
      icon: <Settings />,
      href: "/dashboard/settings",
      label: "Settings",
      roles: ["ADMIN"],
    },
  ];

  // Filter links based on current user's role
  const filteredLinks = navLinks.filter((link) =>
    link.roles.includes(userRole)
  );

  const handleLogout = () => {
    // dispatch(logout());
    router.push("/");
  };

  return (
    <div className="flex px-5 flex-col h-full bg-[#181617]">
      <div className="px-6 pb-6 pt-4">
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image
            height={1000}
            width={1000}
            src={logo}
            alt="Logo"
            className="h-full w-full"
          />
        </Link>
      </div>

      <nav className="flex justify-between h-full mb-10 flex-col">
        <div className="flex-1 flex flex-col gap-4 pb-4">
          <div className="flex flex-col gap-4   text-white">
            {filteredLinks.map((link, index) => (
              <NavLink key={index} href={link.href} icon={link.icon}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <Button
            onClick={handleLogout}
            className="flex items-center justify-start text-[#D00E11] w-[216px] p-[14px_16px] gap-2 rounded-[8px] dark:bg-[#F0D68A] bg-[#F0D68A]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M8.33325 2.5L4.25456 4.53934C3.68992 4.82167 3.33325 5.39877 3.33325 6.03006V13.9699C3.33325 14.6013 3.68992 15.1783 4.25456 15.4607L8.33325 17.5"
                stroke="#D00E11"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5833 7.91699L16.6666 10.0003L14.5833 12.0837M8.33325 10.0003H16.1593"
                stroke="#D00E11"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#D00E11]">Go home</p>
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
