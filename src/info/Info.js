import self from "../img/giphy.gif";
import pokedex from "../img/pokedex.PNG";
import rickAndMorty from "../img/rick.PNG";
import flexShop from "../img/miTiendaFlex.png";

export let colors = ["red", "grey"];

export const info = {
  firstName: "Yaseen",
  lastName: "Alkoja",
  initials: "YAS",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "Fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "Based in the Spain",
    },
    {
      emoji: "💼",
      text: "Freelancer",
    },
    {
      emoji: "📧",
      text: "yaseenimad1@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/yvseenn",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/yaseen-al-koja-8906221a1/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Energetic and dedicated junior full stack developer with a passion for software development and a strong desire to grow into a senior full stack developer. I possess a strong foundation in frontend and backend technologies, coupled with an unwavering work ethic and a commitment to excellence. Seeks an opportunity to contribute to a dynamic and challenging environment where continuous learning and professional development are encouraged.",
  education: [
    {
      name: "Full Stack Developer",
      date: "2023",
      where: "UpgradeHub BootCamp",
    },
    {
      name: "Microcomputer systems and networks",
      date: "2018-2020",
      where: "IES Clara del Rey, Madrid",
    },
    {
      name: "High School",
      date: "2014-2017",
      where: "IES Severo Ochoa, Madrid",
    },
    {
      name: "High School",
      date: "2012-2013",
      where: "Vämöskolan, Karlskrona",
    },
    {
      name: "Primary and High School",
      date: "2005-2012",
      where: "Cambridge High School, Amman",
    }
    
  ],
  experience: [
    {
      name: "Freelancer",
      date: "01/01/2023 – Present",
      where: "No Where to be exact",
      description:
        "As a freelance web developer, I create websites for individuals and small businesses, utilizing my technical expertise to bring their vision to life.",
    },
    {
      name: "ICT Tecnician",
      date: "04/2021-06/2021",
      where: "Escuela Ideo",
      description:
        "IT intern with experience in hardware and software troubleshooting, OS intallation, cleaning hardware, and inventory mangement. ",
    },
    {
      name: "Manager at Papa Johns",
      date: "11/2018-01/2021",
      where: "Papa Johns",
      description:
        "Managed and coordinated the smooth operation of Papa John´s by overseeing inventory management, budget control, and employee scheduling, effectivly resolving any chanllenges that arose.",
    },
  ],
  language: [
    {
      language: "Arabic",
      wrlevel: "Native",
      splevel: "Native",
    },
    {
      language: "English",
      wrlevel: "Native",
      splevel: "Native",
    },
    {
      language: "Spanish",
      wrlevel: "Native",
      splevel: "Native",
    },
  ],

  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "NodeJs",
      "linux",
      "Angular",
      "MongoDB",
      "PHP",
      "MySql",
      "Symfony",
      "tailwindcss",
    ],
    exposedTo: ["nodejs", "react", "sass"],
  },
  hobbies: [
    {
      label: "Gaming",
      emoji: "🎮",
    },
    {
      label: "Sports",
      emoji: "⚽",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    {
      label: "Travelling",
      emoji: "✈️",
    },
  ],
  portfolio: [
    {
      title: "PokeDex",
      live: "https://yvseenn.github.io/PokeDex/",
      source: "https://github.com/yvseenn/PokeDex",
      image: pokedex,
    },
    {
      title: "Rick and Morty Api",
      live: "https://rick-and-morty-ncr3lzhik-yvseenn.vercel.app/",
      source: "https://github.com/yvseenn/rickAndMortyApi",
      image: rickAndMorty,
    },
    {
      title: "Flex Shop",
      live: "https://yvseenn.github.io/mitiendaflex/",
      source: "https://github.com/yvseenn/mitiendaflex",
      image: flexShop,
    },
  ],
};
