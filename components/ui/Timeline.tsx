import React from "react";
import { FaBeer } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the default styles

const Timeline = () => {
  const items = [
    {
      date: "July 2021 - August 2021",
      cardTitle: "Junior Developer",
      cardSubtitle: "MMOB",
      cardDetailedText:
        "Manipulated data into graph visualisations using Python and Matplotlib, indicating expertise in SQL and Python, now used monthly to monitor product performance.",
    },
    {
      date: "March 2024",
      cardTitle: "Data Visualisation",
      cardSubtitle: "MMOB",
      cardDetailedText: "Frontend Developer at MMOB",
    },
    {
      date: "July 2024",
      cardTitle: "Data Visualisation",
      cardSubtitle: "MMOB",
      cardDetailedText: "Frontend Developer at MMOB",
    },
  ];

  return (
    <div>
      <VerticalTimeline>
        {items.map((item, index) => {
          console.log("Rendering item:", item); // Debugging: Log each item
          return (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              contentStyle={{ background: "white", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaBeer />} // Replace FaBeer with a simple icon
            >
              <h3>{item.cardTitle}</h3>
              <h4>{item.cardSubtitle}</h4>
              <p>{item.cardDetailedText}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
