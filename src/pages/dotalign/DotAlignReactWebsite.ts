import { Page } from '../Page'

const DotAlignReactWebsite: Page = {
    title: "DotAlign React Single Page Application",
    description: "Redoing the DotAlign website in React",
    keywords: ['react', 'reactjs', 'work experience', 'single page application', 'spa', 'dotalign', 'website', 'web design', 'ui', 'frontend'],
    url: 'dotalign/react-website',
    technologies: ['javascript', 'typescript', 'html', 'css', 'scss', '.net', 'react'],
    projectDates: '2017',
    content: [
        {
            header: 'Overview',
            content: `Leadership was worried that the DotAlign website didn't
            do enough to illustrate the features and benefits of the product. I was asked to 
            bring the features to life and give the site a facelift.`,
            img: {
                url: '/dotalign-site.gif',
                caption: 'Demo of the DotAlign landing page',
                className: 'demo-gif'
            }
        },
        {
            header: 'From Razor to React',
            content: `I was given the freedom to choose any framework I wanted to redo the site.
            I chose to go with React to give the site a fluid feel and use technology the newer hires
            might be more familiar with (including many recent hires). However, the ASP.NET backend already
            had a fair amount of built in features like authentication, error handling, and an ORM for the
            database. So I only changed the frontend views. I changed the server to route necessary endpoints 
            to React, and left the rest of the backend routes intact.`
        },
        {
            header: 'Using Typescript',
            content: `I always use typescript for my personal projects, and the bar is even higher given our
            coding standards at DotAlign. Most of our stack is in .NET, and all of it is in strongly typed languages.
            It was important to keep the code maintanable and reliable, and typescript is really the only way to
            enforce this when it comes to javascript.`
        },
        {
            header: 'The Design',
            content: `I felt the best way to showcase what DotAlign did was to put the application
            front and center. The previous version of the site had no real visuals of the product. I knew
            we had to show what DotAlign did if we wanted it to click.`
        },
        {
            header: 'Challenges',
            content: `The main challenge was device and browser variances when it came to scroll behavior.
            The design relies heavily on controlling the user's scroll input, and the input comes in many different forms.
            Track pads, mouse wheels, user-set scroll sensitivty, and different browsers scroll behavior led to a lot of problems. 
            The auto-scroll still isn't smooth on every device and browser, but was deemed "good enough" and put to bed.
            If I could go back, I would remove any real scrolling on the home page and dynamically animate the views
            on a scroll up or down action. Trying to do both with elements on the page is too challenging and unpredictable.`
        }
    ],
    rank: 0
}

export default DotAlignReactWebsite