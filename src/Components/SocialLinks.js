import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/anas-hizem-52853b265/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Anashizem",
    },
    {
        id: 3,
        child: (
          <>
            Facebook <BsFacebook size={30} />
          </>
        ),
        href: "https://www.facebook.com/profile.php?id=100008363614289",
      },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:anas.hizem@ensi-uma.tn",
      style: "rounded-br-md",
    },

  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed" id="repulse-div">
      <ul>
        {links.map(({ id, child, href, style}) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-white" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="text-base font-medium font-beckman text-[18px] flex justify-between items-center w-full text-red-600"
              target="_blank"
              rel="noreferrer"  
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;