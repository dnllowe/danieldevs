import { Page } from '../Page'

const BloombergMicroFrontendArchitecture: Page = {
    title: 'Bloomberg Microfronted Architecture',
    keywords: ['bloomberg', 'work experience', 'micro frontend', 'microfrontend', 'micro app', 'jenkins', 'nginx', 'devops'],
    description: "My contributions to the DotAlign cloud severless / micro service architecture",
    url: 'bloomberg/micro-frontend-architecture',
    technologies: ['jenkins', 'nginx',],
    projectDates: '2020',
    content: [
        {
            header: 'Overview',
            content: `One of this first big projects I worked on at Bloomberg was a new micro-frontend architecture.
            Bloomberg has many developers contributing code to various projects. However, we had one website that only supported
            development in Angular, the most popular framework at the time of the site's inception. In order to support new frameworks,
            we needed to restructure the architecture and deployment pipeline for the site and its applications. I was tasked with
            designing and implementing the foundation of a new micro frontend architecture that could support both the existing
            Angular applications alongside new applications made in any framework.`
        },
        {
            header: 'Developer experience and the first building blocks',
            content: `I knew I wanted the developer experience to be frictionless. No one would use the new architecture
            and contribute new apps to our site if the experience created too many obstacles. The one commonality all applications have
            at the end of the day (for most frameworks), is that they still compile to basic html, css, and javascript. I used that
            as the foundation. If our new architecture could build off of the fundamental building blocks of a website, I knew we could
            future proof the design for most frameworks. With this as the assumed foundation, it didn't matter if the developer chose to use
            React, Vue, Elm, or even continued using Angular. A micro frontend architecture that only requires html, css, and javascript as its
            assets could accommodate all the above.`
        },
        {
            header: 'Deployment (Publishing to blob storage through npm and Jenkins)',
            content: `The deployment process continues to focus on the fundamentals. The developer is tasked with having a build system
            that can produce the basic static assets for their site (html, css, and javascript). Assuming the assets are bundled together in
            an easily executable script, I created a Jenkins pipeline that would clone down the code, run the build command, zip up the assets, 
            and publish them to blob storage.`
        },
        {
            header: 'Deployment (Downloading the assets and hosting on Nginx)',
            content: `Publishing the assets to blob storage was half the battle. The next step was controlling what to deploy and when.
            To accomplish this, I borrowed a concept from our existing site. We use a manifest file that consists of an array of app configurations.
            The configurations specify the app name, version, and some runtime behaviors. When developers update the manifest attributes for their app,
            A different Jenkins job detects which files have changed and begins the appropriate deployment. First, it finds the correct version
            of the assets in blob storage. Then, it downloads the assets, and unzips them to a folder structure matching the url where the app should be hosted.
            These unzipped apps live on a machine running Nginx. During deployment, a script creates a dynamic nginx config file based on the apps included for deployment,
            creating a web server that hosts all the deployed applications and their static assets.`
        },
        {
            header: 'Final Product',
            content: `The final result is a web server that is only aware of the static assets its hosting.
            It doesn't matter which framework produced those assets. Likewise, publishing that assets is also framework agnostic.
            Developers are able to choose any framework they want, and the publishing and deployment process is the same.`
        },
    ],
    rank: 0
}

export default BloombergMicroFrontendArchitecture