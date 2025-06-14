import Image from "next/image";
import img1 from "@/assets/need-help4.png";


export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center contact-bg bg-black/90 relative overflow-hidden font-roboto">
      <div className="z-30 w-full px-4 py-8 flex flex-col container abs">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Image
              src={img1}
              alt="Need help image"
              width={300}
              height={200}
              className=""
            />
            <p className="text-[#D1B574] font-roboto font-medium md:text-[24px] max-w-[350px] mt-4">
              With Destiny here, she can help you with any problem you may have
              on our website or app.
            </p>
          </div>

          <div className="max-w-xs">
            <p className="text-[#D1B574] font-roboto font-medium md:text-[24px] max-w-[350px] mt-4">
              Destiny understands that your priority comes first. 24/7 she is
              here for you. Just hit the chat icon or submit an email and we
              will get back you asap.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center relative">     
          <div className="text-center mb-8">
            <h2 className="md:text-[64px] text-5xl font-roboto font-bold text-[#F1E1A3]">
              CONTACT US
            </h2>

            <p className="text-white md:text-xl mt-2">
              If you have an issue, there&apos;s no problem <br /> contact us
              anytime.
            </p>
          </div>

          <form className="w-full max-w-md space-y-4 z-50">
            <div>
              <label
                htmlFor="name"
                className="text-white font-normal font-sans md:text-base text-sm mb-3"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="flex h-[48px] p-[12px_16px] items-center gap-[10px] self-stretch rounded-[8px] border border-[#F1E1A3] bg-white/10 backdrop-blur-lg w-full text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-white font-normal font-sans md:text-[16px] mb-3"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex h-[48px] p-[12px_16px] items-center gap-[10px] self-stretch rounded-[8px] border border-[#F1E1A3] bg-white/10 backdrop-blur-lg w-full text-white"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-white font-normal font-sans md:text-[16px] mb-3"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="flex h-[48px] p-[12px_16px] items-center gap-[10px] self-stretch rounded-[8px] border border-[#F1E1A3] bg-white/10 backdrop-blur-lg w-full text-white"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="text-white font-normal font-sans md:text-[16px] mb-3"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="flex h-[48px] p-[12px_16px] items-center gap-[10px] self-stretch rounded-[8px] border border-[#F1E1A3] bg-white/10 backdrop-blur-lg w-full text-white"
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="bg-[#F1E1A3] text-[#04090D] font-semibold font-roboto rounded-full px-8 py-3 md:text-base text-sm hover:bg-yellow-500 transition-colors w-full"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="text-white text-sm mt-2 text-center md:text-base font-normal">
            If you have an issue, contact our support 24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
