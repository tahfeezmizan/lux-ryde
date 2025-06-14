// components/Status.tsx
import React from "react";

interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => {
  let statusClass = "bg-gray-700 text-[#D1B574]"; // Default style for "Pending" or unknown status

  if (status === "Active") {
    statusClass = "bg-[rgba(29,206,13,0.08)] text-[#1DCE0D] text-sm font-nunito font-normal  text-center";
  } else if (status === "Inactive") {
    statusClass = "bg-[rgba(242,242,242,0.20)] text-[#D8D8D8] text-center text-sm font-nunito font-normal"; // For Inactive status
  } else if (status === "Pending") {
    statusClass = "bg-[rgba(241,225,163,0.20)] text-center text-[#F1E1A3] text-sm font-nunito font-normal";
  
  } else if (status === "Suspended") {
    statusClass = "bg-[rgba(188,0,0,0.20)] text-[#CC0000] text-center text-sm font-nunito font-normal"; // For Suspended status
  }else if (status === "Completed") {
    statusClass = "bg-[rgba(29,206,13,0.08)] text-[#1DCE0D] text-center text-sm font-nunito font-normal";
  }
else if (status === "Processed") {
  statusClass = "bg-[rgba(29,206,13,0.08)] text-[#1DCE0D] text-center text-sm font-nunito font-normal";
}
  return (
    <div className={`px-4 py-2 rounded-full text-sm font-medium ${statusClass}`}>
      {status}
    </div>
  );
};

export default Status;
