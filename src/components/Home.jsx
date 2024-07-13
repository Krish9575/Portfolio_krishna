import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  const texts = [
    "I'm a Full Stack Developer",
    "I'm a Python Developer",
    "I'm a software developer",
    "I'm a competitive programmer"
  ];
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer;
    const currentText = texts[currentTextIndex];
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
    }
    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
    return () => clearTimeout(timer);
  }, [currentTextIndex, isDeleting, displayText, texts]);

  return (
    <section
      name="home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 max-w-md mx-auto lg:mx-0">
            I'm a tech-driven individual with a passion for software development.
            My skillset spans multiple disciplines, including programming languages (C, C++, Python), 
            web development (HTML, Tailwind CSS, React.js, Django, Django Rest Framework), and problem-solving. 
            I've successfully delivered impactful projects showcasing my development skills, 
            further honed through 500+ problem-solving challenges on platforms like LeetCode. 
            Beyond technical expertise, I'm a strong collaborator and communicator, thriving in team environments.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white px-6 py-3 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out text-sm sm:text-base"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <HiArrowNarrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover shadow-lg shadow-cyan-500 hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
