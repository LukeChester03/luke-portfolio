"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/Components/Footer";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build modern, responsive websites tailored to your brand and goals, leveraging the latest technologies to deliver exceptional user experiences.",
    href: "/contact",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "I design intuitive, user-centric interfaces that ensure seamless navigation and maximize engagement across web and mobile platforms.",
    href: "/contact",
  },
  {
    number: "03",
    title: "Tech Consulting",
    description:
      "I offer expert guidance to help you choose and implement the best technology stack for your project’s unique requirements and scalability.",
    href: "/contact",
  },
  {
    number: "04",
    title: "App Development",
    description:
      "I develop high-performance mobile applications using React Native, delivering native-like experiences on both iOS and Android devices.",
    href: "/contact",
  },
  {
    number: "05",
    title: "AI Integration",
    description:
      "I can seamlessly integrate AI-powered features into your products, from intelligent automation to personalized user experiences, enhancing functionality and value.",
    href: "/contact",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "I provide reliable ongoing support and updates to keep your digital products secure, up-to-date, and performing at their best.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-[100px] pb-12 bg-primary-gradient text-textPrimary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] px-6"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.number}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-secondary group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className="text-[42px] font-bold leading-none text-textPrimary group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-textSecondary">{service.description}</p>
                {/* Border */}
                <div className="border-b border-borderGray w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
