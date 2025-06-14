"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import dollar from "@/assets/dollar 2.png";

import Referral from "@/components/icon/Referral";
import Cookies from "js-cookie";
import { logout } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { useGetmeQuery } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import avatar from "@/assets/avatar2.png";

export default function Navbar() {
  const { data } = useGetmeQuery(undefined);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const dispatch = useDispatch(); // Assuming you are using Redux for state management
  const path = usePathname();
  const token = Cookies.get("token");
  const router = useRouter();
  const avatarSrc =
    data?.data?.avatarUrl && data?.data?.avatarUrl.trim().length > 0
      ? data.data.avatarUrl
      : avatar;

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".relative")) {
        setIsSignUpOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to Redux store
    router.push("/");
    window.location.reload(); // Reload the page to reflect the logout state
  }; // Remove the token from cookies}

  const login = token ? true : false;

  return (
    <header
      className={`sticky top-0 w-full z-[999] transition-all duration-300 font-roboto ${
        isMenuOpen
          ? "bg-black "
          : path === "/"
          ? isScrolled
            ? "bg-white/20 backdrop-blur-[10px] "
            : "bg-[#0C0B0B]"
          : "bg-transparent backdrop-blur-[10px]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="RYDE Logo"
            className="lg:w-[110px] w-[70px] lg:h-[110px] h-[70px]"
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Rider", path: "/rider" },
            { name: "Driver", path: "/driver" },
            { name: "MLM", path: "/mlm" },
            { name: "Bonuses", path: "/bonuses" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <div key={item.path} className="flex flex-col items-center">
              <Link
                href={item.path}
                className={`${
                  path === item.path
                    ? "text-secondery font-roboto font-medium"
                    : "text-white font-roboto font-medium"
                } transition-all`}
              >
                {item.name}
              </Link>
              {path === item.path && (
                <div className="w-[120%] h-[1px] bg-secondery mt-1"></div>
              )}
            </div>
          ))}
        </nav>

        {!login ? (
          <div className="hidden lg:block">
            {/* Buttons */}
            <div className="flex gap-4 font-semibold">
              <Link
                href="/login"
                className="bg-secondary text-black rounded px-3 py-1 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Sign In
              </Link>

              {/* Sign Up Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSignUpOpen(!isSignUpOpen)}
                  className="bg-black/50 text-white rounded px-3 py-1 flex items-center gap-1 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Sign Up <ChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {isSignUpOpen && (
                  <div
                    className="absolute left-0 mt-1 w-40 bg-white
                  
                  shadow-md rounded text-black"
                  >
                    <Link
                      href="/rider-sign-up"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={() => setIsSignUpOpen(false)}
                    >
                      Sign Up as Rider
                    </Link>
                    <Link
                      href="/driver-sign-up"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={() => setIsSignUpOpen(false)}
                    >
                      Sign Up as Driver
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden lg:block">
            <div className="flex gap-4 font-semibold">
              <Link
                href="/mlm"
                className="  bg-[#F1E1A3] z-50 md:text-base text-sm font-semibold text-black kmd:text-base rounded-full px-3 min-h-[15px] md:min-h-[20px] flex items-center gap-2 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 hover:text-white font-inter"
              >
                <Referral />
                Referral
              </Link>

              <Link
                href="/credit-page"
                className="bg-[#F1E1A3] text-[#F1E1A3] md:text-base text-sm rounded-full px-5 min-h-[15px] md:min-h-[15px] gap-2 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 flex items-center  hover:text-white font-inter"
              >
                <Image
                  src={dollar}
                  width={20}
                  height={20}
                  alt="dollar"
                  className="w-5 h-5"
                />
                <span className="md:text-base text-sm font-semibold text-black hover:text-white ">
                  100
                </span>
              </Link>

              <div className="relative">
                <Image
                  src={avatarSrc}
                  width={30}
                  height={30}
                  alt="User Avatar"
                  className="rounded-full w-[50px] h-[50px]  cursor-pointer bg-white"
                  onClick={() => setIsSignUpOpen(!isSignUpOpen)}
                />

                {isSignUpOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded text-black">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-100 ease-in-out transform hover:scale-105"
                      onClick={() => setIsSignUpOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/account"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={() => setIsSignUpOpen(false)}
                    >
                      Acoount
                    </Link>
                    {/* <Link
                      href="/setting"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={() => setIsSignUpOpen(false)}
                    >
                      Settings
                    </Link> */}
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={() => setIsSignUpOpen(false)}
                    >
                      Dashboard{" "}
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white "
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-all z-[9999]"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-[#0C0B0B] shadow-lg p-6 flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-white"
            >
              <X size={24} />
            </button>

            {/* Mobile Menu Links */}
            {[
              { name: "Home", path: "/" },
              { name: "Driver", path: "/rider" },

              { name: "Driver", path: "/driver" },
              { name: "MLM", path: "/mlm" },
              { name: "Bonuses", path: "/bonuses" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-white hover:text-[#E5B64F] px-3 ${
                  path === item.path ? "bg-secondery  px-3 py-2 rounded" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {!login ? (
              <div className="flex flex-col gap-4 font-semibold">
                <Link
                  href="/login"
                  className="bg-secondary text-black rounded px-3 py-2 text-center hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>

                <div className="relative w-full">
                  <button
                    onClick={() => setIsSignUpOpen(!isSignUpOpen)}
                    className="bg-black/50 text-white rounded px-3 py-2 flex items-center gap-2 justify-center w-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Sign Up <ChevronDown size={16} />
                  </button>

                  {isSignUpOpen && (
                    <div className="absolute left-0 mt-1 w-full bg-white shadow-md rounded text-black">
                      <Link
                        href="/register?type=user"
                        className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => setIsSignUpOpen(false)}
                      >
                        Sign Up as Rider
                      </Link>
                      <Link
                        href="/register?type=driver"
                        className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => setIsSignUpOpen(false)}
                      >
                        Sign Up as Driver
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 font-semibold">
                <button className="bg-[#F1E1A3]  md:text-base text-base  rounded-full px-6 py-2 flex items-center justify-between gap-2 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 text-black ">
                  <Referral /> Referral
                </button>

                <button className="bg-[#F1E1A3] text-[#F1E1A3] text-sm rounded-full px-6 py-2 flex items-center justify-between gap-2 hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 font-inter">
                  <Image
                    src={dollar}
                    width={30}
                    height={30}
                    alt="dollar"
                    className="w-4 h-4"
                  />
                  <span className="font-semibold text-black text-base ">
                    100
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
