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
            content: `The original DotAlign website still left viewers wondering what it was DotAlign did. 
            I redid the site in order to bring the features to life and more clearly illustrate how DotAlign works.`,
            img: {
                url: '/dotalign-site.gif',
                caption: 'Demo of the DotAlign landing page',
                className: 'demo-gif'
            }
        },
        {
            header: 'From Razor to React',
            content: `The original site was developed in C# using Razor pages and cshtml templates. 
            For the redesign, I chose to go with React to give the site a fluid feel and use technology that newer hires
            might be more familiar with (including many recent hires). Since most of the frontend views were
            changing and the content was being built from scratch, it seemed like the ideal time to update the
            frontend framework. On the backend, however, the ASP.NET server already had a fair amount of built in features 
            like authentication, error handling, and an ORM for the database. 
            So I only changed the frontend views and left most of the backend routes intact.`
        },
        {
            content: `The end result was a snappier web page (thanks to React's single page architecture) and
            a more modern framework that new developers were more familiar with, making subsequent updates to the site
            much quicker.`
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
            Track pads, mouse wheels, user-set scroll sensitivity, and different browsers 
            all affect scroll behavior differently. These differences led to a lot of problems during development. 
            The auto-scroll still isn't smooth on every device and browser, but was deemed "good enough" and put to bed.
            If I could go back, I would remove any real scrolling on the home page and dynamically animate the views
            on a scroll up or down action. Trying to do both with elements on the page is too challenging and unpredictable.`
        }
    ],
    rank: 0
}

export default DotAlignReactWebsite