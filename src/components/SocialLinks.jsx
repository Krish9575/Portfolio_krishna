// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

// const SocialLinks = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           LinkedIn <FaLinkedin size={30} />
//         </>
//       ),
//       href: "https://www.linkedin.com/in/krishna-maru-21a93121a/",
//       style: "rounded-tr-md",
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           GitHub <FaGithub size={30} />
//         </>
//       ),
//       href: "https://github.com/krish9575",
//     },
//     {
//       id: 3,
//       child: (
//         <>
//           Mail <HiOutlineMail size={30} />
//         </>
//       ),
//       href: "mailto:mr.krish9575@gmail.com",
//     },
//     {
//       id: 4,
//       child: (
//         <>
//           Resume <BsFillPersonLinesFill size={30} />
//         </>
//       ),
//       style: "rounded-br-md",
//       href: "/resume.pdf",
//       download: true,
//     },
//   ];
//   return (
//     <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
//       <ul>
//         {links.map((link) => (
//           <li
//             key={link.id}
//             className={
//               "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
//               " " +
//               link.style
//             }
//           >
//             <a
//               href={link.href ? link.href : "/"}
//               className="flex justify-between items-center w-full text-white"
//               download={link.download}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {link.child}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;



import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/krishna-maru-21a93121a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/krish9575",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mr.krish9575@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/KrishnaResume.pdf",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          LeetCode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/Leximoberg/",
    },
  ];

  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
