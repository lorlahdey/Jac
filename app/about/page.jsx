import Image from "next/image";
import jj from "@/public/images/about/jj2.svg";
import NEBlackArrow from "@/public/images/about/NEBlackArrow.svg";
import IconWithText from "@/components/IconWithText";
import tel from '@/public/images/home/tel.svg'
import msg from '@/public/images/home/msg.svg'
import contactIcon from "@/public/images/about/contactIcon.svg";
import map from '@/public/images/about/map.svg'
import quotes from '@/public/images/about/quotes.svg'
import Button from "@/components/Button";

const About = () => {
  return (
    <main className="w-full pt-[100px] text-[#141313]">
      <div className="w-full sm:w-[85%]">
        <div className="w-full  px-5 lg:pl-[100px] pb-[100px]">
          <div className="mb-12 w-full sm:w-[348px]">
            <h4 className="font-semibold italic text-lg leading-6 mb-4">
              Nice to meet you!
            </h4>
            <h3 className="font-bold text-5xl leading-[56px]">Welcome to...</h3>
          </div>
          <div className="flex flex-col xl:flex-row gap-x-20 gap-y-6">
            <div className="xl:w-[430px] flex flex-col justify-center items-center">
              <div>
                <Image src={jj} alt="jj" className="mb-8" />
              </div>
              <h2 className="font-bold text-5xl leading-[48px] -tracking-[5%] mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] mx-2 text-center">
                JACOB JONES
              </h2>
              <p className="text-[24px] italic leading-[32px] -tracking-[3%] font-bold mb-4 text-center">
                Product Designer <span className="font-normal">based in </span>{" "}
                London
              </p>
              <button className="px-10 py-[18px] flex flex-row gap-2">
                <span className="font-medium underline text-[18px] leading-6">
                  Download CV
                </span>
                <Image src={NEBlackArrow} alt="social-icon" className="" />
              </button>
            </div>
            <div className="w-full">
              <div className="mb-12 grid sm:grid-cols-2 gap-y-8 gap-x-[30px] xl:gap-x-[105px] pb-8 border-b-[1px] border-[#141313 opacity-[.2]]">
                <IconWithText imgSrc={tel} text=" +77 022 444 05 05" />
                <IconWithText imgSrc={contactIcon} text="25 yrs" />
                <IconWithText imgSrc={msg} text="jacob360@gmail.com" />
                <IconWithText imgSrc={map} text="United kingdom, London" />
              </div>
              <div>
                <div className="mb-20 flex flex-col lg:flex-row gap-[30px]">
                  <div className="w-full lg:w-[315px]">
                    <div className=" flex flex-row mb-5 items-center gap-x-3">
                      <span className="font-bold text-5xl leadding-[48px] -tracking-[5%] text-transparent bg-clip-text bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
                        10+
                      </span>
                      <span className="italic font-bold text-lg leadding-[20px] ">
                        Years experience...
                      </span>
                    </div>
                    <p className="text-lg leadding-[24px]">
                      Hello there! My name is{" "}
                      <span className="text-[#B86ADF]">Jacob Jones</span>. I am
                      a web designer & developer, and I'm very passionate and
                      dedicated to my work.
                    </p>
                  </div>
                  <div className="w-full lg:w-[315px]">
                    <div className=" flex flex-row mb-5  items-center gap-x-3">
                      <span className="font-bold text-5xl leadding-[48px] -tracking-[5%] text-transparent bg-clip-text bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
                        14
                      </span>
                      <span className="italic font-bold text-lg leadding-[20px] ">
                        Clients Worldwide...
                      </span>
                    </div>
                    <p className="text-lg leadding-[24px]">
                      With 10+ years experience as a professional a graphic
                      designer, I have acquired the skills and knowledge
                      necessary to make your project a success.
                    </p>
                  </div>
                </div>
                <div className="p-5 sm:p-10 bg-[#141313] flex flex-col sm:flex-row gap-x-3">
                  <Image src={quotes} alt="quote" className="" />
                  <p className="text-white font-semibold  text-xl leading-[32px]">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus sed sit ultrices et sed metus sollicitudin.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px] xl:px-[115px] py-[40px] xl:py-[120px] bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white flex flex-col lg:flex-row justify-between gap-x-10 gap-y-10">
          <div className="w-full lg:w-[382px]">
            <h4 className="italic font-semibold text-[18px] leading-6">
              Experience
            </h4>
            <h3 className="mt-4 mb-6 font-bold text-[48px] uppercase leading-[56px]">
              My experience
            </h3>
            <p className="w-full sm:w-[382px] mb-12 text-[18px] leading-[28px]">
              Hello there! My name is Jacob Jones. <br />I am a web designer &
              developer, and I'm very passionate and dedicated to my work.
            </p>
            <Button btnText="Download my resume" />
          </div>
          <div className="flex flex-col gap-y-5 lg:w-[545px]">
            <div className="pb-5 border-b-[1px] border-[#FFFFFF opacity[.002]">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-x-8 mb-3">
                <span className="font-bold text-[18px] leading-[24px]">
                  -2018 - Present
                </span>
                <span className="font-medium text-[16px] leading-[24px]">
                  - Rolling Thunder
                </span>
              </div>
              <h3 className="font-bold text-[32px] leading-[48px]">
                LEAD UI/UX DESIGNER
              </h3>
            </div>
            <div className="pb-5 border-b-[1px]  border-[#FFFFFF opacity[.002]">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-x-8 mb-3">
                <span className="font-bold text-[18px] leading-[24px]">
                  -2018 - 2010
                </span>
                <span className="font-medium text-[16px] leading-[24px]">
                  - Locost Accessories
                </span>
              </div>
              <h3 className="font-bold text-[32px] leading-[48px]">
                SENIOR UI/UX DESIGNER
              </h3>
            </div>
            <div className="pb-5 border-b-[1px]  border-[#FFFFFF opacity[.002]">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-x-8 mb-3">
                <span className="font-bold text-[18px] leading-[24px]">
                  -2008 - 2006
                </span>
                <span className="font-medium text-[16px] leading-[24px]">
                  - Rolling Thunder
                </span>
              </div>
              <h3 className="font-bold text-[32px] leading-[48px]">
                JUNIOR UI/UX DESIGNER
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
