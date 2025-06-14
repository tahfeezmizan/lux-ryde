"use client";

import Image from "next/image";

import upload from "@/assets/upload.png";

import { useState, useRef } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import LoginDriverBg from "@/components/shared/LoginDriverBg";

export default function UploadLicense() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen p-20">
      <LoginDriverBg />

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="mb-2 text-center">
            <div className="flex justify-center mb-4"></div>
            <h2 className="md:text-[40px] text-2xl  font-medium font-roboto text-white mb-2">
              Upload Your License
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[300px] p-6">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            {image ? (
              <div className="relative group">
                <Image
                  src={image}
                  alt="Uploaded image"
                  width={300}
                  height={300}
                  className="max-w-full max-h-[300px] rounded-lg object-contain"
                />
                <Button
                  onClick={handleButtonClick}
                  variant="outline"
                  size="icon"
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Image
                src={upload}
                onClick={handleButtonClick}
                alt="Upload Image"
                width={200}
                height={200}
              />
            )}
          </div>
          <Button type="submit">Next</Button>
        </div>
      </div>
    </div>
  );
}
