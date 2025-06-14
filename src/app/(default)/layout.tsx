"use client";

import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 360px)" }}>{children}</main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
