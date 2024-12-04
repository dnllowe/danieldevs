
import { Page } from "../Page"

const BGCUserPreferences: Page = {
    title: "BGC User Preferences",
    description: "Created the schema and services for saving and loading user preferences",
    projectDates: "2021",
    url: "bgc/user-preferences",
    rank: 0,
    keywords: [
        'bgc',
        'interprocess communication',
        'frontend',
        'fintech',
        'work experience',
    ],
    technologies: ['broadcast channel api', 'typescript', 'javascript'],
    content: [
        {
            header: "Use Case",
            content:`I designed the data model, API, and UI which allows users to customize the application.
            Settings include window placement, tab order, layouts and actions based on incoming data.
            Settings are fetched from the backend at startup and synchronized across all tabs and windows using the broadcast channel API."`,
            relatedPages: [
                {
                    text: "BGC Interprocess Communication with Boradcast Channel API",
                    url: "/bgc/interprocess-communication",
                    external: false,
                },
                {
                    text: "BGC User Configurable Event System",
                    url: "/bgc/event-system",
                    external: false,
                }
            ]
        }
    ]
}

export default BGCUserPreferences