/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect, useRef } from "react"
import GetHeaderTitle from "./GetHeaderTitle"
import AvatarComponent from "../dashboard/avatar"
import Image from "next/image"
import { X, Clock } from "lucide-react"

// Sample notification data - replace with your actual data source
const notificationData = [
  {
    id: 1,
    message: "Your driver John is nearby! Estimated arrival: 10 minutes.",
    time: "14H",
  },
  {
    id: 2,
    message: "Your ride has been accepted by John. They will arrive in 25 minutes.",
    time: "14H",
  },
  {
    id: 3,
    message: "Your driver John is nearby! Estimated arrival: 10 minutes.",
    time: "19H",
  },
  {
    id: 4,
    message: "Your driver John is nearby! Estimated arrival: 10 minutes.",
    time: "14H",
  },
  {
    id: 5,
    message: "Your ride request has been canceled. You can request a new ride anytime!",
    time: "14H",
  },
]

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [notifications, setNotifications] = useState(notificationData)
  const [hasUnread, setHasUnread] = useState(true)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      // Close dropdown if click is outside both the button and dropdown
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as any)  &&
        !buttonRef.current.contains(event.target as any)
      ) {
        setDropdownVisible(false)
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside)

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
    if (!isDropdownVisible) {
      setHasUnread(false)
    }
  }

  const closeDropdown = () => {
    setDropdownVisible(false)
  }

  return (
    <header className="sticky top-0 font-sans z-40 bg-[#181617] px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 pl-12 lg:pl-0">
        <h1 className="text-lg font-semibold text-red-500">
          <GetHeaderTitle />
        </h1>
      </div>
      <div className="flex items-center">
        <div className="flex gap-5 items-center">
          {/* Notification Icon and Dropdown */}
          <div className="relative">
            <button ref={buttonRef} onClick={toggleDropdown} className="w-6 h-6 focus:outline-none relative">
              <Image src="/assets/notification.png" alt="Notification" width={24} height={24} />
              {hasUnread && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-2 h-2 flex items-center justify-center"></span>
              )}
            </button>

            {/* Notification Dropdown Panel */}
            {isDropdownVisible && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-80 bg-[#1E1C1D] rounded-md shadow-lg z-50 text-white overflow-hidden"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-[#d1b574] bg-opacity-10">
                  <h3 className="font-medium text-xl ">Your notifications</h3>
                  <button onClick={closeDropdown} className="text-gray-400 hover:text-white focus:outline-none">
                    <X size={18} />
                  </button>
                </div>

                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    <ul>
                      {notifications.map((notification) => (
                        <li
                          key={notification.id}
                          className="px-4 py-3 border-b border-gray-700 last:border-0 hover:bg-[#252324]"
                        >
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-8 h-8 bg-white rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-200 mb-1">{notification.message}</p>
                              <div className="flex items-center text-xs text-gray-400">
                                <Clock size={12} className="mr-1" />
                                <span>{notification.time}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-center text-gray-400">No notifications</div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Avatar Component */}
          <AvatarComponent />
        </div>
      </div>
    </header>
  )
}

export default Header
