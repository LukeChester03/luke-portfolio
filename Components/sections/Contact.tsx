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

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
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
    <section
      id="contact"
      className="snap-start w-full px-4 sm:px-6 md:px-10 text-textPrimary py-24 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } }}
        className="w-full max-w-6xl flex flex-col lg:flex-row gap-16"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-accent leading-snug">
            Let's get in touch
          </h2>
          <p className="text-base md:text-lg text-textSecondary leading-relaxed">
            Whether you're looking to build something from scratch or collaborate on a creative
            project, feel free to reach out — I'd love to hear from you.
          </p>
          <ul className="space-y-6">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-primary flex items-center justify-center rounded-full text-xl shadow-md">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-textSecondary">{item.title}</p>
                  <h4 className="text-lg font-semibold tracking-tight">{item.description}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col gap-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Input
                {...register("firstName")}
                placeholder="First Name"
                className={errors.firstName ? "border-red-500" : ""}
              />
              <p className="text-xs text-red-500 mt-1 min-h-[1rem]">
                {errors.firstName?.message || "\u00A0"}
              </p>
            </div>
            <div className="flex flex-col">
              <Input
                {...register("lastName")}
                placeholder="Last Name"
                className={errors.lastName ? "border-red-500" : ""}
              />
              <p className="text-xs text-red-500 mt-1 min-h-[1rem]">
                {errors.lastName?.message || "\u00A0"}
              </p>
            </div>
            <div className="flex flex-col">
              <Input
                {...register("email")}
                placeholder="Email"
                className={errors.email ? "border-red-500" : ""}
              />
              <p className="text-xs text-red-500 mt-1 min-h-[1rem]">
                {errors.email?.message || "\u00A0"}
              </p>
            </div>
            <div className="flex flex-col">
              <Input
                {...register("phone")}
                placeholder="Phone (Optional)"
                className={errors.phone ? "border-red-500" : ""}
              />
              <p className="text-xs text-red-500 mt-1 min-h-[1rem]">
                {errors.phone?.message || "\u00A0"}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <Select
              onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
              value={serviceValue || ""}
            >
              <SelectTrigger className="w-full">
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
            <p className="text-xs text-red-500 mt-1 min-h-[1rem]">
              {errors.service?.message || "\u00A0"}
            </p>
          </div>

          <div className="flex flex-col">
            <Textarea
              {...register("message")}
              placeholder="Type your message here..."
              className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
            />
            <p className="text-xs text-red-500 mt-1 min-h-[1rem]">
              {errors.message?.message || "\u00A0"}
            </p>
          </div>

          <motion.div whileTap={{ scale: 0.98 }} className="self-start">
            <Button type="submit" size="lg">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>

          {successMsg && <p className="text-green-500 mt-2 text-sm font-semibold">{successMsg}</p>}
          {errorMsg && <p className="text-red-500 mt-2 text-sm font-semibold">{errorMsg}</p>}
        </form>
      </motion.div>
    </section>
  );
}
