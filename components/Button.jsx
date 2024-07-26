import NEArrow from "@/public/images/home/north_east.svg";
import Image from "next/image";

const Button = ({ btnText }) => {
  return (
    <button className="flex gap-2 py-[18px] px-5 sm:px-10 bg-[#141313] text-white">
      <span className="font-medium text-[18px] leading-6">{btnText}</span>
      <Image src={NEArrow} alt="social-icon" className="" />
    </button>
  );
};

export default Button;
