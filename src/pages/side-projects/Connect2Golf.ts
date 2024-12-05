import { Page } from "../Page" 

const Connect2Golf: Page = {
    title: 'Connect 2 Golf',
    description: "Connect 2 Golf is an social golf application that connects players with each other.",
    url: 'side-projects/connect-2-golf',
    projectDates: '2024',
    rank: 0,
    keywords: [
        'connect 2 golf',
        'iOS',
        'social network',
    ],
    technologies: [
        'swift',
        'swiftui',
    ],
    content: [
        {
            header: "Overview",
            content: [
                `My brother loves playing golf. However, courses typically require that players play in groups of 2-4 players.
                The problem is, unless you've planned ahead with friends family, or colleagues, you'll be stuck playing with random people.
                Maybe these random people are pleasant, but there's always a chance you'll get stuck with a group of people you don't want to play with.
                With Connect 2 Golf, I wanted to create a social golf application that would allow players to connect with players they think they'll enjoy playing with.
                `
            ]
        },
        {
            header: "How It Works",
            content: [
                `Players create a profile that lists their skill level, location, availability, favorite courses, and preferences, such as
                whether they enjoy listening to music, drinking, or socializing while playing. Players can also rate their experience playing with others.
                Using these factors, the app matches players that are available and likely to enjoy playing with each other.
                `
            ]
        }
    ]
}

export default Connect2Golf