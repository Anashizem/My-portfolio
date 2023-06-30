import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "About Me",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id :4 ,
      link : "Experience"
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-[80px] px-4 text-white fixed z-20">
      <div>
        <Link to="About Me"><h1 className="text-6xl cursor-pointer font-signature ml-5 mt-5  ">Port<span className="text-red-600">Folio</span></h1></Link>
      </div>
      <ul className="hidden xmd:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer font-mediumf uppercase font-mova text-[21px] text-white hover:scale-125 duration-200">
            <Link to={link} smooth duration={500}> {link} </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-white xmd:hidden z-10"
      >
        {nav ? <FaTimes size={40} />:<FaBars size={40} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-black text-red-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4 uppercase font-arenq py-6 text-4xl "
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default NavBar;