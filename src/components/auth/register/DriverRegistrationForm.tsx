/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Image from "next/image"
import imgBg from "@/assets/login-img.png"
import { z } from "zod"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { useRegisterMutation } from "@/redux/api/authApi"

import upload from "@/assets/upload.png"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

import { DriverAgreementConsent } from "@/components/PolicyPages/Driver-consent"


const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  referToken: z.string().optional(),
})

type RegisterFormData = z.infer<typeof RegisterSchema>

const DriverRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  })

  const [registerUser] = useRegisterMutation()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [referToken, setReferToken] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<number>(1)

  // Avatar and document files
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [documentFiles, setDocumentFiles] = useState<File[]>([])

  // Document upload states
  const [drivingLicense, setDrivingLicense] = useState<string | null>(null)
  const [vehicleLicense, setVehicleLicense] = useState<string | null>(null)
  const [drivingInsurance, setDrivingInsurance] = useState<string | null>(null)

  const avatarInputRef = useRef<HTMLInputElement>(null)
  const drivingLicenseRef = useRef<HTMLInputElement>(null)
  const vehicleLicenseRef = useRef<HTMLInputElement>(null)
  const drivingInsuranceRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setReferToken(searchParams.get("referToken"))
  }, [searchParams])

  const userType = "driver" // Get the "type" from URL

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setAvatarFile(file)

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>, step: number) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setDocumentFiles((prev) => [...prev, file])

      // Create preview based on step
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        if (step === 2) {
          setDrivingLicense(result)
        } else if (step === 3) {
          setVehicleLicense(result)
        } else if (step === 4) {
          setDrivingInsurance(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAvatarClick = () => {
    avatarInputRef.current?.click()
  }

  const handleDocumentClick = (step: number) => {
    if (step === 2) {
      drivingLicenseRef.current?.click()
    } else if (step === 3) {
      vehicleLicenseRef.current?.click()
    } else if (step === 4) {
      drivingInsuranceRef.current?.click()
    }
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async (data: RegisterFormData) => {
 

    // For steps 2-3, just go to next step
    if (userType === "driver" && currentStep < 4) {
      setCurrentStep(currentStep + 1)
      return
    }

    try {
      toast.loading("Creating your account...", { toastId: "loading" })

      const formData = new FormData()

      // Create the JSON data object
      const jsonData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
        address: data.address,
        country: data.country,
        role: "DRIVER",
     
      }

      // Add the JSON data as bodyData
      formData.append("bodyData", JSON.stringify(jsonData))

      // Add referToken if it exists
      if (referToken) {
        formData.append("referToken", referToken)
      }

      // Add avatar file separately
      if (avatarFile) {
        formData.append("avatarImage", avatarFile)
      }

      // Add document files
      documentFiles.forEach((file) => {
        formData.append("userImages", file)
      })

      console.log([...formData.entries()]) // Debugging

      const response = await registerUser(formData).unwrap()
      if (response) {
        router.push("/check-verify-email")
      }

      toast.update("loading", {
        render: "Account created successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      })
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    }
  }

  // Get the title and description based on current step
  const getStepContent = () => {
    switch (currentStep) {
      case 2:
        return {
          title: "Upload Your Driving License",
          description: "Please upload a clear image of your driving license",
        }
      case 3:
        return {
          title: "Upload Your Vehicle License",
          description: "Please upload a clear image of your vehicle license",
        }
      case 4:
        return {
          title: "Upload Your Driving Insurance",
          description: "Please upload a clear image of your driving insurance",
        }
      default:
        return {
          title: "",
          description: "",
        }
    }
  }

  // Get the current file input ref and image state
  const getCurrentFileInputRef = () => {
    switch (currentStep) {
      case 2:
        return { ref: drivingLicenseRef, image: drivingLicense }
      case 3:
        return { ref: vehicleLicenseRef, image: vehicleLicense }
      case 4:
        return { ref: drivingInsuranceRef, image: drivingInsurance }
      default:
        return { ref: null, image: null }
    }
  }

  const { title, description } = getStepContent()
  const { ref, image } = getCurrentFileInputRef()

  return (
    <div className="flex min-h-screen lg:p-20 p-3 rounded">
      <div className="hidden md:flex md:w-1/2 text-white p-12 flex-col justify-center items-center relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-[120px] font-nunito font-bold text-[#f0d68a] mb-4">
            Hello
            <br />
            {/* <DriverAgreement /> */}
            Driver.
          </h1>
          <DriverAgreementConsent/>

          <p className="md:text-lg max-w-[500px] opacity-80 mt-6 font-nunito text-left">
            Seamlessly connecting you to your destination with modern AI, empowering drivers while elevating journeys.
          </p>
        </div>

        <div className="absolute inset-0">
          <Image src={imgBg || "/placeholder.svg"} alt="Login Image" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-10">
          <div className="mb-8">
            <h2 className="md:text-6xl font-bold mb-8 font-nunito ">Sign Up</h2>
            <p className="md:text-lg text-gray-400 font-roboto">
              Already have an account?{" "}
              <Link href="/login" className="text-[#f0d68a] hover:text-[#e0c67a]">
                Log in now
              </Link>{" "}
              to access your rides and explore new possibilities with RydApp.
            </p>
          </div>

          {currentStep === 1 ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4]focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    placeholder="Enter your phone"
                    type="text"
                    className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4]focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                    {...register("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4]focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto" htmlFor="address">
                    Address *
                  </label>
                  <input
                    id="address"
                    placeholder="Enter your Address"
                    type="text"
                    className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4]focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                    {...register("address")}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto" htmlFor="country">
                    Country *
                  </label>
                  <input
                    id="country"
                    placeholder="Enter your Country"
                    type="text"
                    className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4]focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                    {...register("country")}
                  />
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto" htmlFor="password">
                    Password *
                  </label>
                  <input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Profile Image / Avatar */}
                <div className="space-y-2 col-span-full">
                  <label className="md:text-sm font-medium text-gray-300 block font-roboto">Profile Image *</label>
                  <div className="flex flex-col items-center justify-center min-h-[150px] p-4 border-2 border-dashed border-gray-600 rounded-lg">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={avatarInputRef}
                      onChange={handleAvatarChange}
                    />

                    {avatarPreview ? (
                      <div className="relative group">
                        <Image
                          src={avatarPreview || "/placeholder.svg"}
                          alt="Profile avatar"
                          width={150}
                          height={150}
                          className="w-32 h-32 rounded-full object-cover"
                        />
                        <Button
                          onClick={handleAvatarClick}
                          variant="outline"
                          size="icon"
                          className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#333A44] text-white hover:bg-[#444B55]"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="flex flex-col items-center justify-center cursor-pointer"
                        onClick={handleAvatarClick}
                      >
                        <Image src={upload || "/placeholder.svg"} alt="Upload Avatar" width={100} height={100} />
                        <p className="text-gray-400 mt-2 text-sm">Click to upload profile image</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#f0d68a] text-[#1D2530] font-semibold font-nunito text-xl"
                >
                  {userType === "driver" ? "Next" : "Register"}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="mb-2 text-center">
                <div className="flex justify-center mb-4"></div>
                <h2 className="md:text-[40px] text-2xl font-medium font-roboto text-white mb-2">{title}</h2>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>

              <div className="flex flex-col items-center justify-center min-h-[300px] p-6 border-2 border-dashed border-gray-600 rounded-lg">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  ref={ref}
                  onChange={(e) => handleDocumentChange(e, currentStep)}
                />

                {image ? (
                  <div className="relative group">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="Uploaded document"
                      width={300}
                      height={300}
                      className="max-w-full max-h-[300px] rounded-lg object-contain"
                    />
                    <Button
                      onClick={() => handleDocumentClick(currentStep)}
                      variant="outline"
                      size="icon"
                      className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#333A44] text-white hover:bg-[#444B55]"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => handleDocumentClick(currentStep)}
                  >
                    <Image src={upload || "/placeholder.svg"} alt="Upload Image" width={200} height={200} />
                    <p className="text-gray-400 mt-4">Click to upload</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 py-2 rounded-lg bg-[#333A44] text-white font-semibold font-nunito hover:bg-[#444B55]"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={currentStep === 4 ? handleSubmit(onSubmit) : handleNext}
                  className="w-2/3 py-2 rounded-lg bg-[#f0d68a] text-[#1D2530] font-semibold font-nunito text-xl hover:bg-[#e0c67a]"
                >
                  {currentStep === 4 ? "Register" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DriverRegisterForm