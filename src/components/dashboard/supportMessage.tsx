"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  name: string
  avatar: string
  message: string
  timestamp: string
  active: boolean // add active status
}

export default function SupportMessages() {
  const messages: Message[] = [
    {
      id: "1",
      name: "Andreana Viola",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Your ride has been accepted by John.",
      timestamp: "08:30",
      active: true, // active user
    },
    {
      id: "2",
      name: "Francesco Long",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Your ride has been accepted by John.",
      timestamp: "07:00",
      active: false,
    },
    {
      id: "3",
      name: "Alexandra Michu",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Your ride has been accepted by John.",
      timestamp: "23/11",
      active: true, // active user
    },
  ]

  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden bg-[#2F2D2E] text-white">
      <div className="p-4 border-b border-white">
        <h2 className="text-base font-nunito font-bold">Support Messages</h2>
      </div>
      <div className="divide-y divide-white">
        {messages.map((message) => (
          <div key={message.id} className="flex items-center p-4 relative">
            <div className="relative">
              <Avatar className="h-10 w-10 mr-3 border border-white">
                <AvatarImage src={message.avatar} alt={message.name} />
                <AvatarFallback className="bg-[#D1B574] text-black">
                  {message.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {/* Active indicator outside the avatar */}
              <div
                className={`absolute -bottom-1 right-2 w-3.5 h-3.5 rounded-full border-2 border-[#2F2D2E] ${
                  message.active ? "bg-green-500" : "bg-white"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold font-nunito truncate">{message.name}</p>
              <p className="text-xs text-[#9CA3AF] font-normal font-nunito truncate">
                {message.message}
              </p>
            </div>
            <div className="ml-2">
              <span className="text-xs font-nunito font-normal text-[#B7B7B7]">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <button className="w-full text-[#0F172A] font-nunito py-3 px-4 bg-[#D1B574] hover:bg-amber-600 rounded-md text-sm font-bold transition-colors">
          See All
        </button>
      </div>
    </div>
  )
}
