import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { logout } from "@/redux/features/authSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetmeQuery } from "@/redux/api/authApi";

export default function AvatarComponent() {

    const { data } = useGetmeQuery(undefined);

    console.log(data, "data from avatar component");
    

    const name= data?.data?.name
    const role= data?.data?.role
    const avatarURL= data?.data?.avatarURL
  const dispatch = useDispatch();
   const router = useRouter();
    const handleLogout = () => {
      dispatch(logout()); // Dispatch the logout action to Redux store
      router.push("/");
      window.location.reload(); // Reload the page to reflect the logout state
    }; // Remove the token from cookies}
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-2 py-1 h-auto rounded-full bg-black text-amber-500 hover:bg-black/90"
        >
            <Avatar className="h-10 w-10 border-2 border-amber-500/20">
            <AvatarImage src={avatarURL || "/assets/avatar2.png"} alt="Profile" />
            <AvatarFallback>{name?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
            </Avatar>
          <div className="flex flex-col items-start">
            <span className="font-medium text-amber-500">{name}</span>
            <span className="text-sm text-gray-300">{role}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 ml-1" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
 
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="block w-full text-left" prefetch={false}>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          {/* <Link href="/settings" className="block w-full text-left" prefetch={false}>
            Settings
          </Link> */}
                <button  className="block w-full text-left"  onClick={handleLogout}>
            Logout
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          {/* <Button variant="outline" className="block w-full text-left">
            Logout
          </Button> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
