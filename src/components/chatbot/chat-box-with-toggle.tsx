'use client'
import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import ChatbotIcon from "../icon/Chatbot-icon"

const predefinedMessages = [
  "Which is the strongest password?",
  "What is two-factor authentication (2FA)?",
  "What does phishing refer to in cybersecurity?",
  "How do you enhance cybersecurity?",
  "Why is password management important?",
]

export default function ChatboxWithToggle() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChatbox = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-999">
      {/* Chat Icon Button */}
      <Button
        onClick={toggleChatbox}
        className={`rounded-full w-16 h-16 flex items-center justify-center ${isOpen ? "bg-gray-700" : "bg-yellow-500"}`}
      >
        {isOpen ? <X className="h-32 w-32 text-white" /> : <div className="text-white"><ChatbotIcon /></div>}
      </Button>

      {/* Chatbox */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex p-3 px-4 justify-between items-start self-stretch rounded-tl-lg rounded-tr-lg bg-[#F1E1A3] shadow-md">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-black" />
              </div>
              <span className="text-[#1D2939] font-medium">ChatBot</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 "
              onClick={toggleChatbox}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex h-[327px] p-6 flex-col items-start gap-4 flex-shrink-0 self-stretch bg-[#161616]/40 text-white">
            <p className="font-semibold">Hello there! It is nice to meet you.</p>
            <div className="space-y-1">
              {predefinedMessages.map((message, index) => (
                <button
                  key={index}
                  className="w-full text-left p-2 rounded-md bg-gray-700 text-white text-sm hover:bg-gray-600 transition"
                >
                  {message}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-900 flex items-center">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-gray-700 text-white rounded-l-md p-2 text-sm focus:outline-none"
            />
            <Button className="rounded-r-md bg-yellow-500 hover:bg-yellow-600 h-full p-2">
              <Send className="h-4 w-4 text-black" />
            </Button>
          </div>

          {/* Footer */}
          <div className="p-2 bg-gray-900 text-xs text-gray-500 text-center">Powered by Destiny</div>
        </div>
      )}
    </div>
  )
}
