'use client'
import Image from "next/image";
import { useState } from "react";

const SpecialtyItem = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 py-4">
      <div className="flex items-start justify-between gap-x-10">
        <div className="mr-auto">
          <h3
            className={`text-xl font-bold text-[32px]  leading-[48px] ${
              isOpen
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]"
                : ""
            }`}
          >
            <span
              className={`${
                isOpen
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]"
                  : "text-black"
              } mr-2`}
            >
              •
            </span>
            {title}
          </h3>
        </div>

        <div className=" hidden xl:block lg:max-w-[545px]">
          {isOpen && (
            <div className="mt-2 self-end">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  className="mt-4 w-full max-w-sm"
                />
              )}
            </div>
          )}
          <p className="text-base leading-7 ">{description}</p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-bold text-gray-600 focus:outline-none"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
      <div className="block xl:hidden ">
        {isOpen && (
          <div className="mt-2 self-end">
            {image && (
              <Image src={image} alt={title} className="mt-4 w-full max-w-sm" />
            )}
            <p className="text-base leading-7 mt-[30px]">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialtyItem