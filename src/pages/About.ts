import Page from './Page'
import { getYearsBetween } from '../modules/time/getYearsBetween'

const now = new Date(Date.now())
const timeProgrammingForFun = getYearsBetween(new Date(2013, 5, 1), now) 
const timeProgrammingProfessionally = getYearsBetween(new Date(2017, 8, 1), now)

const About: Page = {
    title: 'About me',
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
            and profressionally for ${timeProgrammingProfessionally} years.`
        }
    ],
    url: 'about',
    rank: 0
}

export default About