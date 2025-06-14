/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState } from "react"
import { RefreshCw, MoreVertical, ArrowUpRight, Paperclip, Send, SmilePlus, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function MessageInterface() {
    const [newMessage, setNewMessage] = useState("")
    const [activeConversation, setActiveConversation] = useState(1)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [messages, setMessages] = useState([
        { id: 1, sender: "Burkina", content: "Hi Burkina, thanks for coming in.", time: "2:48 AM", date: "Tuesday, August 6", isUser: false },
        { id: 2, sender: "You", content: "No problem, will send that over today.", time: "2:48 AM", isUser: true },
        { id: 3, sender: "Burkina", content: "After Confirmation will update on your email.", time: "2:48 AM", isUser: false },
        { id: 4, sender: "You", content: "No problem, will send that over today.", time: "2:48 AM", isUser: true }
    ])

    const conversations = [
        { id: 1, name: "Burkina Faso", lastMessage: "Lorem ipsum dolor sit amet...asgasfgasfasdf;oiasdh;fohaoshpaosijfdajs", date: "Aug 31", avatar: "/assets/avatar1.png", unread: true },
        { id: 2, name: "Burkina Faso", lastMessage: "Lorem ipsum dolor sit amet...", date: "Aug 31", avatar: "/assets/avatar1.png", unread: false },
        { id: 3, name: "Burkina Faso", lastMessage: "Lorem ipsum dolor sit amet...", date: "Aug 27", avatar: "/assets/avatar1.png", unread: true },
        { id: 4, name: "Burkina Faso", lastMessage: "Lorem ipsum dolor sit amet...", date: "Aug 31", avatar: "/assets/avatar1.png", unread: false }
    ]

    const handleSendMessage = () => {
        if (newMessage.trim() === "") return

        const newMessageObj = {
            id: messages.length + 1,
            sender: "You",
            content: newMessage,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            isUser: true
        }

        setMessages((prevMessages) => [...prevMessages, newMessageObj])
        setNewMessage("")

        // Simulate a reply from the other user
        setTimeout(() => {
            const replyMessage = {
                id: messages.length + 2,
                sender: "Burkina",
                content: "Got it! Thanks for the update.",
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                isUser: false
            }
            setMessages((prevMessages) => [...prevMessages, replyMessage])
        }, 1000)
    }

    return (
        <div className="flex max-h-screen bg-gray-800 text-white font-roboto md:gap-5">
            {/* Left Sidebar */}
            <div className={`transition-all duration-300 ${isSidebarOpen ? "w-72" : "w-16"} border-r border-gray-600 flex flex-col p-4 bg-[#F8FAFC1A] bg-opacity-10 rounded-2xl`}>
                {/* Sidebar Toggle Button */}
                <button
                    className="flex justify-center items-center w-8 h-8 absolute top-4 left-full bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    style={{ left: isSidebarOpen ? "calc(100% - 2rem)" : "calc(100% - 4rem)" }}
                >
                    {isSidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </button>

                {isSidebarOpen && (
                    <>
                        {/* Tabs */}
                        <div className="flex justify-between items-center mb-4 border-b-[1px] border-b-[#d1d7db33]">
                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded-md text-sm md:text-base hover:bg-gray-600 transition-colors text-[#F1E1A3]">All</button>
                                <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-600 transition-colors">Unread</button>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-gray-600 transition-colors">
                                    <RefreshCw size={18} />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-600 transition-colors">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Conversations List */}
                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((conversation) => (
                                <div
                                    key={conversation.id}
                                    className={`p-3 hover:bg-gray-700 cursor-pointer border border-b-[#d1d7db33] ${conversation.unread ? 'bg-gray-600' : ''}`}
                                    onClick={() => setActiveConversation(conversation.id)}
                                >
                                    <div className="flex items-start gap-3">
                                        <Avatar className="h-10 w-10 rounded-full">
                                            <Image src={conversation.avatar} alt={conversation.name} width={40} height={40} className="rounded-full" />
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold text-lg text-[#F1E1A3]">{conversation.name}</h3>
                                                <span className="text-xs text-[#BBBBBB]">{conversation.date}</span>
                                            </div>
                                            <p className="md:text-sm text-xs text-gray-400 font-normal truncate mt-1">{conversation.lastMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Right Chat Window */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="p-3 border-1 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 rounded-full">
                            <Image src="/assets/avatar2.png" alt="Burkina Faso" width={32} height={32} className="rounded-full" />
                        </Avatar>
                        <div>
                            <h2 className="font-medium">Burkina Faso</h2>
                            <p className="text-xs text-gray-400">Burkina123@mail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full hover:bg-gray-600 transition-colors">
                            <ArrowUpRight size={18} />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-600 transition-colors">
                            <MoreVertical size={18} />
                        </button>
                    </div>
                </div>

                {/* Message Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC1A] bg-opacity-10">
                    {messages.map((message) => {
                        const showDate = message.date !== undefined
                        return (
                            <div key={message.id}>
                                {showDate && (
                                    <div className="text-center my-4">
                                        <span className="text-xs text-gray-400">{message.date}</span>
                                    </div>
                                )}
                                <div className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                                    {!message.isUser && (
                                        <Avatar className="h-8 w-8 rounded-full mr-3 mt-1">
                                            <Image src="/assets/avatar1.png" alt="User" width={32} height={32} className="rounded-full" />
                                        </Avatar>
                                    )}
                                    <div className={`max-w-[70%] ${message.isUser ? "bg-gray-600" : "bg-gray-700"} rounded-lg p-3`}>
                                        <p className="text-sm bg-[#F1E1A333] bg-opacity-20 rounded-xl border-2 py-3 px-2">{message.content}</p>
                                        <div className="text-right mt-1">
                                            <span className="text-xs text-gray-400">{message.time}</span>
                                        </div>
                                    </div>
                                    {message.isUser && (
                                        <Avatar className="h-8 w-8 rounded-full ml-3 mt-1">
                                            <Image src="/assets/avatar2.png" alt="User" width={32} height={32} className="rounded-full" />
                                        </Avatar>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Message Input */}
                <div className="rounded-bl-[12px] rounded-br-[12px] border-r border-b border-l border-gray-200 bg-white/20">
                    <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-4 py-2">
                        <input
                            type="text"
                            placeholder="Write your message..."
                            className="flex-1 bg-transparent outline-none md:text-sm font-semibold text-[#C1C1C1]"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button className="p-1 rounded-full hover:bg-gray-600 transition-colors">
                            <Paperclip size={18} />
                        </button>
                        <button className="p-1 rounded-full hover:bg-gray-600 transition-colors">
                            <SmilePlus size={18} />
                        </button>
                        <button className="p-1 rounded-full hover:bg-gray-600 transition-colors">
                            <MoreVertical size={18} />
                        </button>
                        <input
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept="image/*,application/pdf"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    console.log("File uploaded:", file.name);
                                    // Add logic to handle file upload
                                }
                            }}
                        />
                        <label
                            htmlFor="file-upload"
                            className="p-1 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                            <Paperclip size={18} />
                        </label>
                        <Button
                            className="bg-[#d4a95e] w-[30%] hover:bg-[#c49a55] text-black rounded-md  py-1 text-sm flex items-center gap-1"
                            onClick={handleSendMessage}
                        >
                            Send Message    
                            <Send size={14} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
