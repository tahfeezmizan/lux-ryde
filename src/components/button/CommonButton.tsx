import React from "react";

interface CommonButtonProps {
  text: string;
  onClick?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondery  text-black font-bold z-50 w-[140px] h-[48px] rounded-full p-5 flex justify-center items-center  hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default CommonButton;
