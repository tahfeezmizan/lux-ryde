import { Feature } from "./Feature";
import { featureData } from "@/constant/featureData";
import CommonButton from "../button/CommonButton";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role: string;
  // Add other fields if needed
}

export default function Hero() {
  const router = useRouter();

  const token = Cookies.get("token");
  let role: string | null = null;

  if (token) {
    const decoded = jwtDecode<DecodedToken>(token);
    role = decoded.role;
    console.log("User role:", role);
  }

  const handleBookRide = () => {
    router.push("/book-ride");
  };

  return (
    <div className="bg-gray hero">
    
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-[100px]">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-3xl sm:text-4xl md:text-[64px] font-roboto  font-bold text-[#FFE88D] md:mb-4 z-10 top-4">
          Your Ride
        </h1>
        <p className="relative font-roboto font-normal text-base sm:text-lg md:text-[20px] pt-[32px] z-10 text-white lg:w-[700px] w-full leading-[160%]">
          Effortless rides at your fingertips. Experience luxury, convenience,
          and savings with every ride. Join us in redefining urban
          transportation.
        </p>


       
     {
        role !== "DRIVER"&&(
          <div className="md:pt-[32px] pt-5 z-[99]">
            <CommonButton
              text="Book a Ride"
              onClick={handleBookRide}
            />
          </div>
        )
     }
         

     

  

        <div className="md:py-[120px] py-[60px]">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureData.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
