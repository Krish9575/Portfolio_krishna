import React from "react";
import Transport from '../assets/portfolio/Transport.png'
import TaskMangement from '../assets/portfolio/TaskMangement.png'
import Password from '../assets/portfolio/Password.png'
import proposed_system from '../assets/portfolio/proposed_system.png'
import campus_area_network from '../assets/portfolio/campus_area_network.png'
import remote_driving from '../assets/portfolio/remote_driving.jpg'
import translator from '../assets/portfolio/translator.jpg'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TaskMangement,
      title: "TaskMangement",
      demoLink: "https://taskmangement-chi.vercel.app/", // Replace with actual demo link
      codeLink: "https://github.com/IronMan2028/Taskmangement", // Replace with actual code link
    },
    {
      id: 2,
      src: Transport,
      title: "Vehical Transport",
      demoLink: "https://vercel-react-drf.vercel.app/", // Replace with actual demo link
      codeLink: "https://github.com/IronMan2028/vercel_react_drf", // Replace with actual code link
    },
    {
      id: 3,
      src: Password,
      title: "Password Generator",
      demoLink: "https://password-generator-iota-fawn.vercel.app/", // Replace with actual demo link
      codeLink: "https://github.com/IronMan2028/PasswordGenerator", // Replace with actual code link
    },
    {
      id: 4,
      src: proposed_system,
      title: "A Hybrid approach to Network security using of firewall and Honeypot.",
      demoLink: "", // Replace with actual demo link
      codeLink: "https://github.com/Krish9575/NFH", // Replace with actual code link
    },
    {
      id: 5,
      src: translator,
      title: "Human Language Translator",
      demoLink: "", // Replace with actual demo link
      codeLink: "https://github.com/Krish9575/HLVT2", // Replace with actual code link
    },
    {
      id: 6,
      src: remote_driving,
      title: "Remote Driving",
      demoLink: "", // Replace with actual demo link
      codeLink: "https://github.com/Krish9575/Remote_Driving", // Replace with actual code link
    },
    {
        id: 7,
        src: campus_area_network,
        title: "Campus Area Network",
        demoLink: "", // Replace with actual demo link
        codeLink: "https://github.com/Krish9575/campus_area_network", // Replace with actual code link
      },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, title, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="rounded-md duration-300 transform hover:scale-105"
              />
              <div className="flex justify-center items-center gap-4 p-4 bg-gray-900">
              {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md text-center block w-full transform hover:scale-105 transition duration-300"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 text-white rounded-md text-center block w-full transform hover:scale-105 transition duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;




