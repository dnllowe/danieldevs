import { Page } from "../Page"

const BGCInterprocessCommunication: Page = {
    title: "BGC Interprocess Communication",
    description: "Created a system to allow for interprocess communication between separate instances of a stock trading application",
    projectDates: "2021",
    url: "bgc/interprocess-communication",
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
            content:`The trading application is a desktop-based React app, but contains multiple tabs and can open multiple windows.
            These tabs and windows all need to synchronize some state and data in order to functional properly.
            In order to achieve the synchronization, we needed a way to communicate between these separate processes.
            I researched a implemented a solution using the Broadcast Channel API for chromium.`
        },
        {
            header: "Implementation",
            content:`I used the chromium Broadcast Channel API to handle communication within the app. Our trading app comprised N number of tabs or windows. Tabs shared a process, but each window operated on its own separate processes.
            Windows can have tabs, but any tab or window needed to be able to send messages to any other tab or window, regardless of the parent window.
            The broadcast channel API allows communication between windows (so long as the windows were spawned from the same parent), and traditional browser events can communicate between tabs.
            I created an interface for channel communication so that the implementation details of communication between tabs <-> tabs, windows <-> windows, or windows <-> tabs was abstracted away.
            Details about the channels that were created were serialized into a format that could be saved and loaded at application startup to recreate the the necessary connections when the app started.
            With this in place, I created a system where a Channel can associate itself to the ID of another tab or window.
            Then, as messages are passed throughout the application, they can be routed to the correct window and tab.
            
            \n
            Now, as long as data and application state is kept serializable, it can be shared across different processes.`,
            relatedPages: [
                {
                    text: "BGC User Configurable Event System",
                    url: "/bgc/event-system",
                    external: false,
                },
                {
                    text: "BGC User Preferences",
                    url: "/bgc/user-preferences",
                    external: false,
                }
            ]
        }
    ]
}

export default BGCInterprocessCommunication