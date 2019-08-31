import Page from '../Page'

const DotAlignAzureFunction: Page = {
    title: 'DotAlign Azure Function Microservices',
    keywords: ['dotalign', 'work experience', 'faas', 'microservice', 'micro service', 'serverless', 'azure functions', 'backend'],
    description: "My contributions to the DotAlign cloud severless / micro service architecture",
    url: 'dotalign/severless-micro-services',
    technologies: ['c#', 'f#', '.net', 'javascript', 'typescript', 'azure functions'],
    image: {
        url: '/azure-functions.jpg',
        className: 'azure-functions-img'
    },
    content: [
        {
            header: 'Overview',
            content: `DotAlign was once a native Windows application installed as an Outlook addin.
            I helped migrate it to a cloud architecture using Docker and Kubernetes, but unforseen
            complications arose from our dependency on Windows. We wanted to focus on building the product,
            and not tooling for our deployment. We wanted our service managed as a first-class
            citizen in Azure. To accomplish this, we began refactoring the now cloud-native business logic
            into microservices. I took on indexing email data.`
        },
        {
            header: 'Indexing Email',
            content: `Indexing and analyzing email is at the core of what DotAlign does. To accomplish this
            in a cloud setting, I used the Microsoft Graph REST API. First, the web application places a 
            message on the indexing queue. This gets picked up by the indexing microservice. 
            \nIndexing the most important items
            \nIn order to get the most top-of-mind emails in the system first, I took a two-pronged approach. 
            Starting from the time the function begins, it requests a batch of the most recent mail items in 
            the past, and any that may have come in sense the function last ran. I track the newest and oldest 
            messages fetched. The next time the function runs, it will use the oldest and newest message
            timestamps and fan out from there.
            \nUsing a dedicated micro service for indexing, I was able to drastically improve the time it takes
            to index a user's entire inbox. In the Outlook addin, it could take several hours. With the microservice,
            I can index all of my work email (just under 6000) in just over 5 minutes--even though that's
            more email than I would have had when running the Outlook addin a year prior.`
        },
        {
            header: 'Communicating with DotAlign Cloud Components',
            content: `When working with Azure Functions, much of the logic for how functions interact
            with queues and triggers is built into the code of the function app. However, there were
            times we needed other parts of the DotAlign application, like the web app, to access these
            queues and triggers. I implemented the services that exposed endpoints other DotAlign
            components used interact with the function app.`
        },
        {
            header: 'Converting Seed Data from XML to Json',
            content: `When a DotAlign instance begins, we seed the database with information on well-known
            companies, industries, domain names, etc. Previously, this data was stored in XML. It was
            decided that this data should be in json format to make it easier to maniuplate. And admin
            said they could transcribe it, but there were thousands of data points.
            \nAutomating the process
            \nI was able to write a quick Node application to read and convert the XML into json for the admin,
            saving possibly days of work and leaving behind a repeatable mechanism in case we purchased
            or received more data from external sources that was in XML format.`
        }
    ],
    rank: 0
}

export default DotAlignAzureFunction