"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/Components/Button";
import { Input } from "@/Components/Input";
import { Textarea } from "@/Components/TextArea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/Select";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Footer from "@/Components/Footer";

const info = [
  { icon: <FaEnvelope />, title: "Email", description: "lukechester03@outlook.com" },
  { icon: <FaPhone />, title: "Phone Number", description: "07718646377" },
];

// Zod validation schema
const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    setSuccessMsg("");
    setErrorMsg("");
    try {
      await emailjs.send("service_l74ajab", "template_sprps1k", data, "ys8egHbrr8pQmRs6U");
      setSuccessMsg("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  const serviceValue = watch("service");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-col gap-[30px]">
          {/* info */}
          <div className="flex-1 flex items-start xl:justify-start mb-8 xl:mb-0">
            <ul className="flex flex-row gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-textSecondary">{item.title}</p>
                    <h3 className="text-textPrimary text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* form */}
          <div className="xl:h-[54%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
              noValidate
            >
              <h3 className="text-4xl text-accent">Let's get in touch</h3>
              <p className="text-textSecondary">
                Whether you’re looking to create or update a website, explore my range of services,
                discuss collaboration opportunities, or are an employer interested in hiring a
                dedicated software engineer, feel free to reach out -<br /> I would love to connect!
              </p>

              {/* inputs grid with flex-col wrappers for full width and stable error */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col w-full">
                  <Input
                    {...register("firstName")}
                    placeholder="First Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  <p className="min-h-[1.25rem] mt-1 text-red-500 text-sm">
                    {errors.firstName ? errors.firstName.message : "\u00A0"}
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <Input
                    {...register("lastName")}
                    placeholder="Last Name"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  <p className="min-h-[1.25rem] mt-1 text-red-500 text-sm">
                    {errors.lastName ? errors.lastName.message : "\u00A0"}
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <Input
                    {...register("email")}
                    placeholder="Email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  <p className="min-h-[1.25rem] mt-1 text-red-500 text-sm">
                    {errors.email ? errors.email.message : "\u00A0"}
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number (Optional)"
                    aria-invalid={errors.phone ? "true" : "false"}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  <p className="min-h-[1.25rem] mt-1 text-red-500 text-sm">
                    {errors.phone ? errors.phone.message : "\u00A0"}
                  </p>
                </div>
              </div>

              {/* select with error below */}
              <div className="flex flex-col w-full">
                <Select
                  onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
                  value={serviceValue || ""}
                  defaultValue=""
                  aria-invalid={errors.service ? "true" : "false"}
                >
                  <SelectTrigger className="w-full text-black/60">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Tech Consulting">Tech Consulting</SelectItem>
                      <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                      <SelectItem value="Misc">Other (Please Specify)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <p className="min-h-[1.25rem] mt-1 text-red-500 text-sm">
                  {errors.service ? errors.service.message : "\u00A0"}
                </p>
              </div>

              {/* textarea with error below */}
              <div className="flex flex-col w-full">
                <Textarea
                  {...register("message")}
                  placeholder="Type your message here..."
                  aria-invalid={errors.message ? "true" : "false"}
                  className={errors.message ? "border-red-500" : ""}
                />
                <p className="min-h-[1.25rem] mt-1 text-red-500 text-sm">
                  {errors.message ? errors.message.message : "\u00A0"}
                </p>
              </div>

              <Button
                size="lg"
                className="max-w-60 self-center items-center justify-center"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {successMsg && (
                <p className="text-green-500 text-center font-semibold mt-2">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="text-red-500 text-center font-semibold mt-2">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default Contact;
