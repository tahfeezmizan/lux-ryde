/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import LoginSchema, { LoginFormData } from "@/schema/LoginSchema";
import { useLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import CommonBg from "@/components/shared/CommonBg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [UserLogin] = useLoginMutation();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormData) => {
    try {
      toast.loading("Logging in...");

      const response: any = await UserLogin({
        email: data.email,
        password: data.password,
      });

      if (response.error) {
        toast.dismiss();
        toast.error("Login failed.");
      } else {
        const { accessToken, role } = response.data.data;

        // Store in cookies
        Cookies.set("token", accessToken);
        Cookies.set("role", role); // optional, for client-side logic

        // Store in redux
        dispatch(setUser({ token: accessToken }));

        toast.dismiss();
        toast.success("Logged in successfully!");

        if (role === "ADMIN") {
        router.push("/dashboard");
        router.refresh();
        } else {
         router.push('/');
         router.refresh();
        }
      }
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row md:h-screen h-auto p-4 md:p-20">
<CommonBg/>
      {/* Right Section (Login Form) */}
      <div className="w-full md:w-1/2 bg-[#1D2530] text-white py-10  p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 font-nunito">
              Login
            </h2>
            <p className="text-sm md:text-lg text-gray-400 font-nunito">
              Don&lsquo;t have an account? Create your account. It takes less
              than a minute.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                className="text-sm md:text-base font-medium text-gray-300 block font-roboto"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="example@domain.com"
                type="email"
                className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-white focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-nunito"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                className="text-sm md:text-base font-roboto font-medium text-gray-300 block"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none font-nunito"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-500 bg-[#272e3f] text-[#f0d68a] focus:ring-[#f0d68a]/60"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm md:text-base font-medium font-roboto text-white"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="ml-auto text-sm text-[#005DFF] hover:text-[#f0d68a]"
              >
                Forgot Password?
              </Link>
            </div>

            <Button type="submit">Log in</Button>

            <div className="text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-[#f0d68a] hover:text-[#e0c67a]"
              >
                Create your account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
