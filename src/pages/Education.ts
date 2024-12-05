import { Page } from './Page'

const Education: Page = {
    title: 'Education',
    description: 'My educational background',
    keywords: ['education', 'fullstack academy of code', 'bootcamp', 'electron', 'projects'],
    technologies: ['react', 'redux', 'javascript', 'electron', 'node', 'html', 'css', 'scss', 'webpack'],
    url: 'education',
    projectDates: '2017',
    rank: 0,
    content: [
        {
            header: 'Fullstack Academy of Code',
            content: [
                `Fullstack Academy of Code, as the name suggests, teaches fullstack software engineering.
                The curriculum focuses on backend server development with node, frontend development with react and redux,
                javascript fundamentals using ES6/7 syntax, and computer science fundamentals, data as datastructures and algorithms.`
            ]
        },
        {
            header: 'My Time at Fullstack',
            content: [
                `I attended Fullstack as a full-time student from January 2017 to April 2017.
                As a full-time student, I spent 9 hours a day engrossed in software engineering. Each day, 
                we built something and learned fundamentals and best practices by doing. We always worked in teams
                of at least two, and built several react apps, including blogs, twitter clones, spotify clones,
                ecommerce sites, and travel site clones. My group's senior project was social app that
                helped users stay in touch with their friends.`
            ]
        },
        {
            header: 'Senior Project: Super Friend Electron Desktop App',
            content: [
                `Superfriend is a desktop applicaton built using Electron, a chromium browser
                that runs node-based and GUI applications on the desktop. Since I had worked with Electron
                before, one of my main contributions was wiring the react and node code to work with Electron
                as the backend. I also helped write the script that ingests the user's contacts from their
                internal Mac contacts database. The script runs as a background process and imports contacts
                in batches, serializing the output into json and persisting it in the Super Friend app. The script
                is available on npm: npm install icloud-addressbook.`
            ]
        },
        {
            header: 'Group Project: E-commerce Site',
            content: [
                `The first large group project was an e-commerce site. This included a products page,
                categories, and checkout experience, all built with react + redux. I created the products page
                component and the ability to filter and search for products by product name or category.`
            ]
        },
        {
            header: 'Individual Project: Humposer Electron Deskto App',
            content: [
                `One assignment at Fullstack was a 3-day hackathon where we could build whatever we wanted.
                I chose to work with Electron to make the desktop application Humposer. Humpower uses native web
                APIs for audio recording combined with node libraries for pitch detection to record a user's hummed
                audio and pitch data. With the pitch data recorded, it can then play it back using any audio sample,
                such as guitar, keyboards, etc. The idea is, for those who can't play an instrument or don't have one
                readily accesible, to be able to compose music by humming.`
            ]
        },
        {
            header: 'My Actual Degree: Marketing and Advertising at Clemson University',
            content: [
                `Just in case you're wondering, I did attend a 4 year college in a past life.
                My GPA was 3.73 in Marketing and Advertising. This led me to a 4 year career in advertising as
                a writer in New York. I frequently put myself in position to work on digital projects as much as
                possible, and when that didn't fully scratch the itch, I left to start an online business, which
                afforded me the time to learn software engineering (and the money to drop on a bootcamp).`
            ]
        }
    ]
}

export default Education
