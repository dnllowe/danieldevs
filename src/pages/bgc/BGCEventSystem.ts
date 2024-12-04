import { Page } from "../Page"

const BGCConfigurableEventSystem: Page = {
    title: 'BGC User Configurable Event System',
    description: "A system which allows users to create custom events, linking changes in stock prices to actions and notifications within the application.",
    projectDates: '2022',
    rank: 0,
    url: 'bgc/event-system',
    keywords: [
        'bgc',
        'event system',
        'fintech',
        'frontend',
        'work experience',
    ],
    technologies: [
        'typescript',
        'javascript',
        'react',
        'broadcast channel api',
        'html',
        'css',
        'websockets',
    ],
    content: [
        {
            header: "Use Case",
            content: `We created the Event Notification System to allow users to customize the trading application to fit their needs and trading strategies.
            Users were given actions like: Audio Notification, Pop-up Notification, Toast Notification which could trigger whenever a stock met a configurable conditions,
            such as any numeric property of the object being greater than, less than, or equal to another value or property on the object or different stock.
            For example, if the price of Company A's stock surpassed the price of Company B's stock, they could get a pop-up notification.
            Actions could eventually go on to perform trades or other features within the app for even greater control.`
        },
        {
            header: "Implementation",
            content:`I used the chromium Broadcast Channel API to handle communication with the app. Our trading app comprised N number of tabs or windows. 
            Then, because our backend data provides a schema for all data types, including the properities and their data type, I was able to create a generic class that could
            render the appropriate fields on any record and create serialized expressions such as, when Field A is less than Field B. The frontend can then subscribe to a
            websocket channel on the backend that publishes changes to these specific records and fields. I created a service on the frontend that then checks against
            the serialized conditions and executes the users configured action when the changes are noticed, with a configurable rate limit to prevent users from getting spammed
            by notifications if changes fluctuated a retriggered frequently in a short burst of time.
            `,
            relatedPages: [
                {
                    text: "BGC Interprocess Communication with Boradcast Channel API",
                    url: "/bgc/interprocess-communication",
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

export default BGCConfigurableEventSystem