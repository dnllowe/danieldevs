import { Page } from './Page'
import { getYearsBetween } from '../modules/time/getYearsBetween'

const now = new Date(Date.now())
const timeProgrammingForFun = getYearsBetween(new Date(2013, 5, 1), now) 
const timeProgrammingProfessionally = getYearsBetween(new Date(2017, 8, 1), now)

const About: Page = {
    title: 'About me',
    image: {
        url: 'me-sm.jpg',
        caption: "It's me!",
        className: 'profile-picture'
    },
    keywords: [
        'about',
        'summary',
        'background'
    ],
    description: "A little bit about myself and how I got into software development.",
    content: [
        {
            header: "Background",
            content: `Hi, I'm Daniel. 
            I've been writing software and web applications for fun for ${timeProgrammingForFun} years 
            and profressionally for ${timeProgrammingProfessionally} years. I got into programming because
            I love creating things. In past lives, I've created art, music, an online business, and ad campaigns.
            Programming gives me the power to create anything I or my team can imagine. As you may know, it's a blast.`
        },
        {
            header: "Getting started",
            content: `Like many programmers that grew up in the 90s, I got my start with simple websites and css.
            Although I didn't go to school for computer science, I eventually found my way back to programming.
            I learned the basics of C++ through online tutorials and textbooks, then made a simple 2D game engine and built a few rough prototypes.
            I was instantly hooked and knew I wanted to make software development my career.`
        },
        {
            header: "The Bootcamp",
            content: `After several prototypes, I finally released a real game on iOS and Android. 
            But in the process, I realized just how much more there was to learn about software development. 
            I wanted professional experience and more formal training, so I looked into my options. 
            I read about several software bootcamps in NYC and chose Fullstack Academy of Code because 
            it had the most modern curriculum: Node, React + Redux, and PostgreSQL.
            It was a great experience working together with other developers for the first time, and the course work was fantastic. The instructors did a great job teaching us fundamental CS concepts like data structures and algorithms,
            but we also spent every day building actual web applications using Node and React. Fullstack was definitely one of the best experiences of my life.
            `
        },
        {
            header: "Life as a Developer",
            content: `Immediately after the bootcamp, 
            I landed my first professional fullstack software engineering job. Finally, I was in. I never looked back. 
            I continue to work on personal projects to learn about new tech that excites me and stay sharp, and I get to do what I love for living--professionally.
            `
        }
    ],
    url: 'about',
    rank: 0
}

export default About