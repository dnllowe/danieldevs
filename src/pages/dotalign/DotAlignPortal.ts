import { Page } from '../Page'

const DotAlignPortal: Page = {
    title: "DotAlign Portal",
    keywords: ['dotalign', 'work experience', 'elm', 'ui', 'api', 'rest', 'spa', 'single page application', 'frontend', 'backend', 'full stack','web design'],
    description: "How user's interact with DotAlign's Cloud deployment",
    url: 'dotalign/frontend-portal',
    technologies: ['elm', 'css', 'scss', 'webpack'],
    projectDates: '2019',
    content: [
        {
            header: "Overview",
            content: `The portal replaces what was once the native Outlook addin UI.
            The DotAlign portal let's users create a DotAlign instance for themselves in the cloud,
            join teams to share data with, and request insights about them and their team's data.
            We used Elm as our frontend framework, a functional language that complies to javascript.
            Elm pioneered the pattern many know as Redux for state management.
            Below are the features I built for the portal.`
        },
        {
            header: "Implementing the Style Guide",
            content: `A designer created the look and feel for the portal. Once the design was final,
            I created reusable components for common elements, such as headers, buttons, avatars, panels,
            and various types of lists. I used SCSS so I and other developers working on the portal could reuse
            styles more easily. This helped reduce css bloat, streamlined tweaking UI, and kept the site looking
            consistent. After creating most of the foundational components, other developers were able to 
            quickly create new pages from them.`
        },
        {
            header: "CSS Grid for Responsive Layout",
            content: `I think I'm done with Bootstrap's column and row pattern. It leaks a lot of design
            logic into the layout and things can get messy fast. I chose to go with CSS Grid and it was a great
            decision. Media queries control the grid layout from css. Placement of elements is at the grid level
            using grid templates and areas. With this implementation, the html didn't have to change--even 
            if a navbar shifted from the top to the side, etc. I used libraries like auto-prefixer and caniuse
            along with some reusable SCSS mixins to maintain backwards compatibility back to IE 10.`
        },
        {
            header: "Authenticating and Authorizing Users and Routes",
            content: `I created middleware for the .NET server that checks if the user is part of a
            specific group in Azure Active Directory beforing passing request through the API.
            I use a .NET library to authenticate users with OAuth.`
        },
        {
            header: "Azure Configuration and Deployment",
            content: `In order for the web application to work, it needs certain environment variables set
            and permission to read Azure Active Directory and the Microsoft Graph API on behalf of users
            and the Azure tenant. This require registering an application with Azure, creating a UI flow for 
            admin consent of application permissions, and configuring the correct settings in the Azure Portal.
            I researched and setup the configuration for the application. Eventually, other team members automated
            this process with a deployment script clients can use to install the DotAlign cloud app.`
        },
        {
            header: "Communication with Azure Functions",
            content: `When users take certain actions, such as joining a team, the web app needs to
            alert specific microservices of the Azure Function app. I created the service layer that enables
            communication between components of the DotAlign cloud app and the function app
            (which runs all the business logic). The web app uses this service to place messages onto queues,
            letting the function app know when to start indexing user mail, when to stop, which teams it should
            analyze data for, and when to run one-time events (like seeding market data into the database).`
        },
    ],
    rank: 0
}

export default DotAlignPortal