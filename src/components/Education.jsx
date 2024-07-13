import React from "react";
import { motion } from "framer-motion";

const EducationItem = ({ title, institution, date, details }) => (
  <motion.div 
    className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h3>
    <p className="text-xl text-gray-300 mb-1">{institution}</p>
    <p className="text-md text-gray-400 italic mb-4">{date}</p>
    {details.map((detail, index) => (
      <p key={index} className="text-gray-300 mb-1">{detail}</p>
    ))}
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology, Ghaziabad, Uttar Pradesh",
      date: "August 2020 – May 2024",
      details: ["CGPA: 9.31"]
    },
    {
      title: "12th Standard (Higher / Senior Secondary)",
      institution: "Government Higher Secondary School, Labriya",
      date: "MPBSE - 2018",
      details: [
        "Percentage: 90.8 / 100",
        "Subject: PMC",
      ]
    },
    {
      title: "10th Standard (Secondary)",
      institution: "Shakti Vidhya Peeth Higher Secondary School, Rajod",
      date: "MPBSE - 2016",
      details: [
        "Percentage: 92.5 / 100",
        "Subject: General Science"
      ]
    }
  ];

  return (
    <div name="education" className="w-full py-16 bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <motion.div 
          className="pb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Education
          </p>
        </motion.div>
        <div className="mt-8">
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;