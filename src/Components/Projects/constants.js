import { linefollower, pat, robograph, stockmanager ,portfolio } from "./assets";

const projects = [
    {
      name: "PAT Association",
      description: 'PAT, the Tunisian Animal Protection, is a non-profit organization established in 2015. Their mission is to improve the welfare and rights of animals in Tunisia through rescue, rehabilitation, and adoption efforts. With a strong dedication to making a positive impact, PAT works tirelessly to provide assistance and find caring homes for animals in need.',
      image: pat ,
      source_code_link: 'https://github.com/Anashizem/PAT-Association.git',
    },
    {
      name: 'Robograph',
      description: 'This robot is capable of finding the end of a non-cyclic line maze, calculating the shortest path from the start point to the end point, and then driving that shortest path.',
      image: robograph,
      source_code_link: 'https://github.com/Anashizem/RobotGraph.git',
    },
    {
      name: 'Stock manager',
      description: 'Stock-Manager is a simple cmd application for stock management. It provides users with the ability to view the real-time stock levels of various products. Additionally, it offers a comprehensive history feature that allows users to track daily and monthly entries and exits. These historical records are then stored in an archive for future reference.',
      image: stockmanager ,
      source_code_link: 'https://github.com/Anashizem/stock-manager-en-c.git',
    },
    {
      name : 'Line follower',
      description :"A line follower robot is an autonomous robotic system designed to track and follow a designated line on the ground. It utilizes various sensors and control mechanisms to detect the line's position and adjust its movements accordingly. ",
      image :linefollower,
      source_code_link:'https://github.com/Anashizem/Line-Follower.git',
    },
    {
      name :'Portfolio personnel',
      description :"Un site web présentant mes projets et compétences à des clients ou employeurs potentiels.",
      image : portfolio,
      source_code_link :'https://github.com/Anashizem/My-portfolio.git',
    }
  ];
  export { projects };