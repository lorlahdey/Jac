import React from 'react'
import Image from "next/image";

const IconWithText = ({imgSrc, text}) => {
  return (
    <div className="flex flex-row justify-start items-center gap-3">
      <Image src={imgSrc} alt="social-icon" className="" />
      <span
        className="font-bold italic text-[#141313] text-[18px] leading-6 break-all"
      >
        {text}
      </span>
    </div>
  );
}

export default IconWithText