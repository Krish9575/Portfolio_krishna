import React from "react";
import { motion } from "framer-motion";
import Education from "./Education";

const About = () => {
  return (
    <section name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <motion.div 
          className="pb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </motion.div>
        <motion.p 
          className="text-xl mt-10 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm Krishna Maru, a passionate software developer skilled in Python, C/C++, and object-oriented programming, with expertise in MySQL and socket programming. Graduated with a Bachelor of Technology in Computer Science and Engineering from SRM Institute of Science and Technology, Ghaziabad, with a CGPA of 9.31. I excel in web development using HTML, CSS, React.js, Django, and Django Rest Framework, adept at tools like Visual Studio Code, PyCharm, and Google Colab. I've led impactful projects including a real-time video streaming platform and a transportation conversion web app. Certified in Database Management System and Data Structure and Algorithm using Python. Passionate about continuous learning through platforms like LeetCode and GeeksforGeeks, I thrive in collaborative environments, bringing strong problem-solving skills and a commitment to excellence.
        </motion.p>
        <Education />
      </div>
    </section>
  );
};

export default About;