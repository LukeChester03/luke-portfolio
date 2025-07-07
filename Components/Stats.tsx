"use client";

import CountUp from "react-countup";

const stats = [
  { number: "1", text: "AI-Powered Mobile App Launched" },
  { number: "3+", text: "Websites Crafted with React & More" },
  { number: "4+", text: "Core Technologies Mastered" },
  { number: "2", text: "Years Experience in Startups & Tech Consulting" },
];

const Stats = () => {
  return (
    <section className="pt-4 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap gap-8 max-w-[90vw] mx-auto xl:max-w-none justify-center xl:justify-start">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[180px] flex flex-col items-center xl:items-start gap-2"
            >
              <span className="text-4xl xl:text-6xl font-extrabold text-textPrimary">
                {typeof item.number === "number" ? (
                  <CountUp end={item.number} duration={5} delay={2} />
                ) : (
                  item.number
                )}
              </span>
              <p
                className={`text-center xl:text-left leading-snug text-textSecondary ${
                  item.text.length < 15 ? "max-w-[140px]" : "max-w-[200px]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
