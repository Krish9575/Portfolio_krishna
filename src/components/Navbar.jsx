// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import NavLinks from "./NavLinks.jsx";

// const NavBar = () => {
//   const [nav, setNav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "home",
//     },
//     {
//       id: 2,
//       link: "about",
//     },
//     {
//       id: 3,
//       link: "portfolio",
//     },
//     {
//       id: 4,
//       link: "experience",
//     },
//     {
//       id: 5,
//       link: "contact",
//     },
//   ];

//   return (
//     <nav className="navbar fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white z-50">
//       <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
//         <h1 className="text-5xl font-signature ml-2">Krishna</h1>
//         <ul className="hidden md:flex space-x-4">
//           {links.map(({ id, link }) => (
//             <NavLinks
//               key={id}
//               link={link}
//               className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:text-white hover:scale-105 duration-200"
//             />
//           ))}
//         </ul>
//         <div
//           onClick={() => setNav(!nav)}
//           className="cursor-pointer pr-4 md:hidden text-gray-200 hover:text-white duration-200"
//         >
//           {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//         </div>
//       </div>
//       {nav && (
//         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200 z-40">
//           {links.map(({ id, link }) => (
//             <NavLinks
//               key={id}
//               link={link}
//               className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white duration-200"
//               onClick={() => setNav(!nav)}
//             />
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks.jsx";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full h-20 text-white z-50 transition-all duration-300 ${
      scrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-screen-lg mx-auto px-4 h-full flex justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-signature ml-2">Krishna</h1>
        <ul className="hidden md:flex space-x-4">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:text-white hover:scale-105 duration-200"
            />
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 md:hidden text-gray-200 hover:text-white duration-200"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200 z-40">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white duration-200"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;