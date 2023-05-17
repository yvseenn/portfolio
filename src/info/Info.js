import self from '../img/giphy.gif'
import pokedex from "../img/pokedex.PNG"
import rickAndMorty from "../img/rick.PNG"

export let colors = ["red", "grey"];

export const info = {
    firstName: "Yaseen",
    lastName: "Al koja",
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