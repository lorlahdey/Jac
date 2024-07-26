"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import google from "@/public/images/sidebar/google.svg";
import icon from "@/public/images/sidebar/icon.svg";
import instagram from "@/public/images/sidebar/Instagram.svg";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "WORKS", path: "/works" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="w-[285px] min-h-screen bg-[#141313] text-white p-12 flex flex-col justify-between ">
      <Link href={'/'}>
        <h3 className="font-bold text-3xl leading-[39px] mb-[101px]">Jac.</h3>
      </Link>
      <div>
        <ul className="flex flex-col gap-y-5  mb-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`relative flex items-center space-x-2 text-[20px] leading-[30px] ${
                  pathname === item.path ? "font-bold " : "font-normal"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.path && (
                  <span className="absolute inset-x-0 bottom-50 h-1 bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF]#B86ADF"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="mb-[30px] flex flex-col gap-3">
          <Image src={google} alt="social-icon" className="" />
          <Image src={icon} alt="social-icon" className="" />
          <Image src={instagram} alt="social-icon" className="" />
        </div>
        <p>Copyright ©2023 Jacob Jones. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Sidebar;
