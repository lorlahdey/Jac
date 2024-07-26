"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Button from "@/components/Button";
import case1 from "@/public/images/works/uxCaseStudy1.svg";
import case2 from "@/public/images/works/uxCaseStudy2.svg";
import case3 from "@/public/images/works/uxCaseStudy3.svg";
import case4 from "@/public/images/works/uxCaseStudy4.svg";
import testimonial from "@/public/images/works/testimonialImg.svg";
import logo1 from "@/public/images/works/logo1.svg";
import logo2 from "@/public/images/works/logo2.svg";
import logo3 from "@/public/images/works/logo3.svg";
import logo4 from "@/public/images/works/logo4.svg";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Bally Website Research",
      category: "UX case study",
      image: case1,
    },
    {
      id: 2,
      title: "Bally Website Research",
      category: "UX case study",
      image: case2,
    },
    {
      id: 3,
      title: "Bally Website Research",
      category: "UX case study",
      image: case3,
    },
    {
      id: 4,
      title: "Bally Website Research",
      category: "UX case study",
      image: case4,
    },
  ];
  return (
    <section className="w-full mt-8 px-5 lg:px-10 xl:px-16 2xl:px-[115px] py-12">
      <div>
        <h4 className="font-semibold italic text-lg leading-6 mb-4">Work</h4>
        <h2 className="font-bold text-5xl leading-[56px]">Recent project</h2>
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-20 mb-16  justify-center items-center max-w-5xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col xl:flex-row  justify-center lg:items-center lg:justify-between gap-x-[30px] gap-y-5"
              >
                <div className="lg:order-2 ">
                  <Image src={project.image} alt={project.title} className="" />
                </div>
                <div className="lg:order-1">
                  <h3 className="font-semibold italic text-lg leading-6 mb-4">
                    {project.category}
                  </h3>
                  <p className="font-bold text-[40px] leading-[40px] mb-6">
                    {project.title}
                  </p>
                  <ArrowRight
                    size="60"
                    color="#141313"
                    className="-rotate-45"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto ">
            <Button btnText="Load more" />
          </div>
        </div>
        <section className="pt-[120px] pb-12">
          <div className="px-[20px] xl:px-[115px] py-[40px] xl:py-0 xl:pt-[100px] xl:pb-[48px] bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white flex flex-col gap-12 ">
            <div className="mb-12 text-center">
              <h2 className="font-semibold italic text-lg leading-6 mb-4">
                Testimonial
              </h2>
              <h4 className="font-bold text-5xl leading-[56px]">
                WHAT THEY SAYS
              </h4>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-y-8 gap-x-10 2xl:gap-x-[115px] border-b border-white">
              <div className="flex-shrink-0">
                <Image src={testimonial} alt="testimonial" className="" />
              </div>
              <div className="">
                <p className="font-semibold italic text-[32px] leading-[40px] mb-10 2xl:w-[545px]">
                  "File storage made easy – including powerful features you
                  won’t find anywhere else. Whether you’re."
                </p>
                <div className="mb-14">
                  <p className="font-semibold text-[24px] leading-[31.2px] mb-2">
                    -Larry Diamond
                  </p>
                  <p className="font-medium text-[16px] leading-[20.8px] -tracking-[1%]">
                    Chief Executive Officer, Besnik
                  </p>
                </div>
                <div className="flex gap-x-[14px] mb-3">
                  <ArrowLeft
                    size="60"
                    color="#141313"
                    className=" p-2 bg-white rounded-full"
                  />
                  <ArrowRight
                    size="60"
                    color="#141313"
                    className="p-2 bg-white rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between">
              <Image src={logo1} alt="logo1" className="" />
              <Image src={logo2} alt="logo" className="" />
              <Image src={logo3} alt="logo" className="" />
              <Image src={logo4} alt="logo" className="" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Works;