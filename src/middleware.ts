/* eslint-disable @typescript-eslint/no-unused-vars */
import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface Member {
  role: string;
}

export function middleware(request: NextRequest) {
  const homeRoute = `${request.nextUrl.origin}/login`; 
  const currentPath = request.nextUrl.pathname;

  // Token Retrieval
  const token = request.cookies.get("token")?.value;

  if (!token) {
    console.warn("Token is missing. Redirecting to home.");
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }

  try {
    const decodedToken = jwtDecode<Member>(token);
    const userRole = decodedToken.role;

    // Define routes based on roles
    const studentRoutes = ["/dashboard"]; // Student gets all routes];
    const adminRoutes = ["/dashboard" ]; // Admin gets all routes

    // Role-based access control
    if (userRole === "USER" && !studentRoutes.includes(currentPath)) {
      console.warn(`Access denied for student to ${currentPath}. Redirecting to home.`);
      return NextResponse.redirect(new URL(homeRoute, request.url));
    }

   

    if (userRole === "ADMIN" && !adminRoutes.includes(currentPath)) {
      console.warn(`Access denied for admin to ${currentPath}. Redirecting to home.`);
      return NextResponse.redirect(new URL(homeRoute, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token. Redirecting to home.");
    return NextResponse.redirect(new URL(homeRoute, request.url));
  }
}

// Apply middleware to specific routes
export const config = {
  matcher: [
    
  ],
};
