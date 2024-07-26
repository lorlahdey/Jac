import React from 'react'
import blog1 from "@/public/images/blogs/blog1.svg";
import blog2 from "@/public/images/blogs/blog2.svg";
import blog3 from "@/public/images/blogs/blog3.svg";
import Button from '@/components/Button';
import BlogCard from '@/components/BlogCard';

const Blogs = () => {
  return (
    <main className="pr-5 lg:pr-0 py-[30px] lg:py-[100px] pl-5 lg:pl-[115px] ">
      <div className="flex flex-col justify-center items-center mb-12">
        <div></div>
        <h3 className="font-semibold italic text-[18px] leading-[28px] text-center mb-4">
          Blog
        </h3>
        <h1 className="font-bold text-[48px] leading-[56px] text-center">
          Read my blog
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center lg:justify-normal items-center gap-x-10 gap-y-7">
        <BlogCard
          imgSrc={blog1}
          date="10 July, 2022"
          blogTitle="12 unique example of portfolio websites"
        />
        <BlogCard
          imgSrc={blog2}
          date="10 July, 2022"
          blogTitle="12 unique example of portfolio websites"
        />
        <BlogCard
          imgSrc={blog3}
          date="10 July, 2022"
          blogTitle="12 unique example of portfolio websites"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <Button btnText="Load more" />
      </div>
    </main>
  );
}

export default Blogs