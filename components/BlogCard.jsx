import Image from "next/image";

const BlogCard = ({imgSrc, date, blogTitle}) => {
  return (
    <div className="w-[315px] border-b-2 border-[] pb-5">
      <Image src={imgSrc} alt="jj" className="mb-6" />
      <div>
        <h4 className="font-semibold italic mb-3 text-[18px] leading-[24px]">{date}</h4>
        <h3 className="w-[315px] font-bold text-[24px] leading-[30px]">
          {blogTitle}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
