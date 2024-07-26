import SpecialtyItem from "@/components/SpecialtyItem"
import ServiceImg from "@/public/images/services/ServiceImg.svg";


const Services = () => {
  const specialties = [
    {
      title: "WEB DESIGN",
      description:
        "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template",
    },
    {
      title: "UI/UX DESIGN",
      description:
        "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template",
    },
    {
      title: "MOBILE APPLICATION",
      description:
        "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template",
      image:  ServiceImg , 
    },
    {
      title: "USER RESEARCH",
      description:
        "You can customize a template or make your own from scratch, with an immersive library at your disposal. You can customize a template",
    },
  ];

  return (
    <section className="w-full mt-8 px-5 lg:px-10 xl:px-20 2xl:px-[115px] py-12">
      <h4 className="font-semibold  text-lg leading-6 mb-4">Service</h4>
      <h2 className="font-bold text-5xl leading-[56px] font-bold mb-12">MY SPECIALTIES</h2>
      {specialties.map((specialty, index) => (
        <SpecialtyItem
          key={index}
          title={specialty.title}
          description={specialty.description}
          image={specialty.image}
        />
      ))}
    </section>
  );
}

export default Services