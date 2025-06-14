"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

interface ModalProps {
  imageSrc: string
  onClose: () => void
  name: string
}

export default function MmlModal({ imageSrc, onClose, name }: ModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>(imageSrc)

  // Use the same image for all profile images
  const profileImages = [imageSrc, imageSrc, imageSrc]

  const handleImageClick = (src: string) => {
    setSelectedImage(src)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="rounded-[8px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[8px] p-6  shadow-lg w-96 max-w-sm relative">
    

        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-white">{name}</h2>
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-gray-300">
          <X size={20} />
        </button>

        {/* Main Profile Circle */}
        <div className="flex justify-center mb-8 relative">
          <div
            className="w-24 h-24 relative cursor-pointer border border-[#F1E1A3] rounded-full p-1"
            onClick={() => handleImageClick(imageSrc)}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={name}
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>

          {/* Vertical connecting line */}
          <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 w-[1px] h-6 bg-[#F1E1A3]"></div>
        </div>

        {/* Horizontal connecting line */}
        <div className="relative flex justify-center mb-6">
          <div className="w-48 h-[1px] bg-[#F1E1A3]"></div>
        </div>

        {/* Two smaller profiles side by side */}
        <div className="flex justify-center space-x-20 mb-4">
          {profileImages.slice(1, 3).map((img, index) => (
            <div key={index} className="relative">
              {/* Vertical lines connecting to the smaller profiles */}
              <div className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 w-[1px] h-6 bg-[#F1E1A3]"></div>
              <div
                className="cursor-pointer border border-[#F1E1A3] rounded-full p-1"
                onClick={() => handleImageClick(img)}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Profile ${index + 2}`}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

