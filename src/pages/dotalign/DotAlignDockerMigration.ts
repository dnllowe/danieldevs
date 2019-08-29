import Page from "../Page"

const DotAlignDockerMigration: Page = {
    title: 'DotAlign Docker Migration',
    keywords: ['docker', 'dotalign', 'work experience', 'severless', 'containers', 'kubernetes', 'k8s', 'backend'],
    description: 'My contributions to porting DotAlign from a native, Windows desktop application to a severless cloud architecture.',
    url: 'dotalign/docker-migration',
    technologies: ['c#', '.net', 'powershell', 'docker', 'kubectl'],
    content: [
        {
            header: 'Overview',
            content: `For many years, DotAlign existed as a native Windows desktop application. 
            Users installed a Microsoft Outlook Addin and DotAlign performed all the processing on the user's device.
            But this model had limitions. Different versions of Outlook, Windows, and PC hardware versions led to unexpected bugs.
            User encountered performance issues when the plugin ran in their Outlook pane.
            Deploying required manual installation on each user's device, which made rolling out to large teams an obstacle.
            Shortly after I began working at DotAlign, we made the decision to move a cloud-based model, and I led the migration to a severless Docker container architecture.
            These are my specific contributions.`
        },
        {
            header: 'Containerizing DotAlign',
            content: `DotAlign was a .NET WPF application. Certain coding decisions and patterns were
            made with the asummption that DotAlign had a UI and required input from a user. 
            My first tasks were:
            \n
            \n1) Finding any user-set configuration and applying those to environment variables
            \n2) Creating a console application and entry point for Docker that ran all the application business logic
            \n3) Standardize the user deployment and service configurations
            \n4) Reserach and implement Docker-based approaches for things like persisting data, exposing ports, and communication between deployments`
        },
        {
            header: "Docker / Kubernetes architecture",
            content: `Since DotAlign was intended as a native application, we decided to maintain
            a similar architecture--even in the cloud. Each user would have their own deployment / pod that 
            indexed, persisted, and analyzed their email data. Meta information about their analytics would 
            persist to a location accessible by all the containers so users could see shared insights. 
            Finally, service endpoints for each user's deployment would allow users to request data
            from a frontend web portal, similar to what they could see from the native Outlook plugin.
            `
        },
        {
            header: 'Developer test deployments with Powershell Script',
            content: `Testing locally was a simple as a Docker Compose file.
            But when it came to testing a deployment in Azure, the developer experience was pretty painful:
            create an Azure resource group, a container service resource, login to our Azure Docker Registry from your console, run the docker commands (preferably with a good tag), then finally go about your dev work. Not. Fun.
            \nAfter doing this one-too-many times one weekend while working on bug fixes, I read into the documentation on Azure Resources and realized
            I could create a Powershell script to do all of that. 
            I made room for a bit of user input (the name for the container and the user email to create the deployment for) 
            and turned what used to require 5 or so minutes of manual input and monitoring and a background task. Much better.`
        },
        {
            header: 'Deploying production containers and services through a REST API',
            content: `We needed a mechanism for clients to eventually create deployments for users.
            I found a somewhat-low-level-but-better-than-nothing .NET library that could make REST API
            calls to a Kubernetes cluster and spin up deployments. With this library, I was able to send a lightweight POST request
            to a User service. The request contained all the necessary user settings to match to environment variables and using templated yaml
            created the user's deployment and service endpoint. 
            Once we had a long running internal production deployment, 
            this REST endpoint replaced the Powershell script from before.`
        },
        {
            header: "Routing service API calls to user's container with Kubernetes",
            content: `Users are only allowed to retrieve data from their deployment.
            To enforce this authorization, I exposed Kubernetes services to each user's pod
            using the user's email address as the service endpoint. From the server, 
            I used the built-in .NET OAuth library to authenticate users.
            Then, using their email address, I constructed backend routes to the proper Kubernetes service.`
        },
        {
            header: 'Reducing cost caused by massive IO with Azure File Storage',
            content: `Once the system was up and running, we were terrifed by the cost of the production app.
            DotAlign is extremely chatty with the database. Saving email data, running analytics, and sharing data
            amongst users is almost always happening. Azure charges for I/O operations between the container and
            the external shared volume. Multiply this chatter by each user and... The bill. Is. High.
            \nBut using Docker's infrastructure to our advantage, I was able to reduce the cost per user deployment
            from about $50 per day to... about $0. Our deployments weren't getting charged for disk operations
            within the container itself--only the shared volume. We could run all the analytics and persist as much data 
            as we wanted for free there. The solution was to run the majority of DotAlign's tasks
            within the container. Then periodically, we would simply save the user's local database to the shared location. One operation. Problem solved.`
        },
        {
            header: 'Challenges: Windows Containers',
            content: `When I think back to what was difficult about this migration, 
            two words always come to mind: Windows containers. From what I can gather, most
            servers, VMs, microservices, and all manner of backend technologies run on linux. 
            The use-case just isn't there to have first-class support for Windows Containers. Even
            when working in Azure--Windows HQ, many features and services were limited to linux containers.
            The funny thing is, we only had a small dependency on Windows. One of my teammates came very close
            to completely breaking that dependency, and yet, in order not to change too many things at once,
            we marched ahead with Windows containers. If I could go back and argue for one thing more strongly,
            it would have been to start with migrating to linux first, then Docker.`
        }
    ],
    rank: 0
}

export default DotAlignDockerMigration