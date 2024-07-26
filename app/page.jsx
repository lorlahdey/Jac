import Image from "next/image";

import IconWithText from "@/components/IconWithText";
import homeImg from '@/public/images/home/Img.svg'
import tel from '@/public/images/home/tel.svg'
import msg from '@/public/images/home/msg.svg'
import textBGImg from "@/public/images/home/sector.svg";

import instagramIcon from "@/public/images/home/Instagram.svg";
import dribbbleIcon from "@/public/images/home/icon.svg";
import FBIcon from "@/public/images/home/fb.svg";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="w-full sm:w-[85%]">
      <section className="w-full text-[#141313] relative flex flex-col gap-x-4 xl:flex-row items-center justify-between px-5  py-[100px] sm:pl-[40px] xl:pl-[115px]">
        <div className="relative w-full xl:max-w-[544px]">
          <div className="absolute -z-10 inset-0 ">
            <Image src={textBGImg} alt="Background" objectFit="cover" />
          </div>
          <h1 className="mb-6  text-[48px] sm:text-[102px] leading-[56px]  sm:leading-[90px]  font-normal uppercase">
            My name is{" "}
            <span className="font-bold">Jacob Jones...</span>
          </h1>
          <p className="text-[32px] italic leading-[32px] -tracking-[-3%] font-bold mb-12">
            Product Designer <span className="font-normal">based in </span>{" "}
            London
          </p>
          <Button btnText="Let’s talk with me" />
          <div className="grid sm:grid-cols-2 gap-x-[48px] mt-16 ">
            <IconWithText imgSrc={tel} text=" +77 022 444 05 05" />
            <IconWithText imgSrc={msg} text="jacob360@gmail.com" />
          </div>
        </div>
        <div classname="">
          <Image src={homeImg} alt="social-icon" className="" />
        </div>
        <div className=" transform  flex xl:flex-col items-center gap-4 ">
          <div className="">
            <Image src={instagramIcon} alt="Instagram" className="" />
          </div>
          <div className="">
            <Image src={dribbbleIcon} alt="Dribbble" className="" />
          </div>
          <div className="">
            <Image
              src={FBIcon}
              alt="Twitter"
              className="rotate-[90deg] xl:rotate-0"
            />
          </div>
          <div className=" w-32 h-px xl:w-px xl:h-32 bg-gray-300 mt-2"></div>
        </div>
      </section>
    </main>
  );
}
