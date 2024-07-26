'use client'
import {useState, useRef} from 'react'
import { Link21 } from "iconsax-react";
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

 const handleSubmit = (e) => {
   e.preventDefault();
   // Handle form submission here
   console.log(formData);
 };

  return (
    <main className="w-full py-[30px] lg:py-[100px] px-5 lg:pl-[55px] xl:pl-[115px] mx-auto ">
      <div className="w-full sm:w-[85%] flex flex-col lg:flex-row justify-center items-center gap-y-8 gap-x-8 xl:gap-x-14">
        <div className="w-full lg:w-fit flex flex-col gap-y-20">
          <div>
            <h4 className="font-semibold italic text-[18px] leading-[24px]">
              Contact
            </h4>
            <h3 className="font-bold text-[48px] leading-[56px] mt-4 mb-[30px] uppercase">
              Reach out me
            </h3>
            <p className="w-full sm:w-[400px] text-[16px] leading-[24px] -tracking-[3%]">
              249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC
              3000, London.
            </p>
          </div>
          <div>
            <p className="font-bold text-[32px] leading-[40px]">
              +77 022 444 05 05
            </p>
            <p className="font-bold text-[32px] leading-[40px] break-words">
              jacob360@gmail.com
            </p>
          </div>
          <div className="flex flex-wrap gap-6 font-bold text-[32px] leading-[40px]">
            <span className="font-medium uppercase text-[16px] leading-[24px] -tracking-[3%]">
              Facebook
            </span>
            <span className="font-medium uppercase text-[16px] leading-[24px] -tracking-[3%]">
              Twitter
            </span>
            <span className="font-medium uppercase text-[16px] leading-[24px] -tracking-[3%]">
              Instagram
            </span>
            <span className="font-medium uppercase text-[16px] leading-[24px] -tracking-[3%]">
              LinKedIn
            </span>
          </div>
        </div>
        <div className='w-full lg:w-[775px]  bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] text-white px-[30px] py-[34px] lg:px-[55px] xl:px-[85px] lg:py-[64px] flex flex-col items-center gap-x-10">'>
          <h3 className="text-left self-start uppercase font-bold text-[30px] leading-[48px] mb-20">
            any project?
          </h3>
          <form className="w-full">
            <div className="grid sm:grid-cols-2 gap-x-6">
              <div>
                <FormInput
                  label="NAME"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormInput
                  label="EMAIL"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <FormInput
                  label="MESSAGE"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="mt-2 flex items-center">
                <button
                  type="button"
                  className="  rounded cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <Link21 size="20" color="#FFFFFF" variant="Bold" />
                </button>
                <span className="ml-2 uppercase font-medium text-base leading-6  text-white">
                  Attach file
                </span>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
              </div>
            </div>
            <div className="mt-10">
              <Button btnText="Submit now" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact