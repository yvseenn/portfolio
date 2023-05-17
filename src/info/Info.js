import self from '../img/giphy.gif'
import pokedex from "../img/pokedex.PNG"
import rickAndMorty from "../img/rick.PNG"

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
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the Spain'
        },
        {
            emoji: "💼",
            text: "Freelancer"
        },
        {
            emoji: "📧",
            text: "yaseenimad1@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/yvseenn",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/yaseen-al-koja-8906221a1/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Am a Junior Full Stack developer, seeking to be a senior FSD one day.🕶 Highly enthusiastic, not patient, hard working and great work ethics, 🦾 Seeking to start my journey in a company in which I could extend my knowledge and challenge myself daily!",
    education: [
        {
          name: "Primary and High School",
          date: "2009-2014",
          where: "Cambridge High School",
        },
        {
          name: "High School",
          date: "2014-2016",
          where: "IES Severo Ochoa",
        },
        {
          name: "Microcomputer systems and networks",
          date: "2018-2020",
          where: "IES Clara del Rey",
        },
        {
          name: "Full Stack Developer",
          date: "2023",
          where: "UpgradeHub BootCamp",
        },
      ],
      experience: [
        {
          name: "Freelancer",
          date: "01/01/2023 – Nowadays",
          where: "No Where to be exact",
          description:
            "Full Stack Developer, working on personal and professional projects.",
        },
        {
          name: "ICT Tecnician",
          date: "04/2021-06/2021",
          where: "Escuela Ideo",
          description:
            "I did my internship in the middle grade of microcomputer systems and networks. My tasks were focused on solving hardware and software problems. I worked with Google OS and Docker platform to perform OS installations (Linux) locally in several classrooms remotely. Cleaning computers and managing returns in case the equipment was not working.",
        },
        {
          name: "Manager at Papa Johns",
          date: "11/2018-01/2021",
          where: "Papa Johns",
          description:
            "Perform daily, weekly and monthly inventories.calculate monthly budgets on annual and monthly sales.assign schedules to employees.manage complicated situations giving quick and effective solutions.",
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

    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'NodeJs','linux','Angular','MongoDB','PHP','MySql','Symfony','tailwindcss'],
            exposedTo: ['nodejs', 'react', 'sass']
        }
    ,
    hobbies: [
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Sports',
            emoji: '⚽'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "PokeDex",
            live: "https://yvseenn.github.io/PokeDex/", 
            source: "https://github.com/yvseenn/PokeDex",
            image: pokedex
        },
        {
            title: "Rick and Morty Api",
            live: "https://rick-and-morty-ncr3lzhik-yvseenn.vercel.app/",
            source: "https://github.com/yvseenn/rickAndMortyApi",
            image: rickAndMorty
        }
    ]
}