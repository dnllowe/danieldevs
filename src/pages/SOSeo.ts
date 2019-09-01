import { Page } from './Page'

const SOSeo: Page = {
    title: 'SOSeo React + Node Search Engine Optimization App',
    description: 'A web application that helps content creators write search engine optimized content',
    keywords: ['seo', 'react', 'node', 'express', 'rest api', 'projects', 'html', 'css', 'scss', 'javascript', 'typescript', 'stripe', 'mailchimp', 'shopify', 'wordpress', 'axios', 'ajax', 'redux', 'bootstrap', 'frontend', 'backend', 'full stack', 'web design'],
    technologies: ['typescript', 'javascript', 'node', 'sql', 'react', 'webpack', 'ajax', 'html', 'css', 'scss'],
    url: 'soseo',
    projectDates: '2017-2018',
    rank: 0,
    content: [
        {
            header: 'Overview',
            content: `SOSeo analyzes content written in its editor to ensure the content follows
            search engine optimization best practices. It scans the text for keyword density, use of images,
            and specific html tags. After scanning a page, it provides a score with recommendations for improvement.
            The site is live and used daily.`,
            img: {
                url: 'soseo.gif',
                className: 'demo-gif'
            }
        },
        {
            header: 'Frontend (React + Redux)',
            content: `I used React + Redux on the frontend. React has become my goto framework for
            frontend development, and redux was necessary for sharing and maintaining state across
            components. I wanted the site to provide feedback and scoring with every keystroke, so careful
            attention to the React lifecycle was necessary.`
        },
        {
            header: 'Backend (Node + Express)',
            content: `The application requires standard CRUD operations for users and their content. 
            For the backend, I used an Express server built in Node with the Sequelize ORM for communication with
            a PostgreSQL database. The frontend makes ajax calls with the axios library to
            communicate with the server. In addition to saving and fetching users and their content, the backend server
            also communicates with various third-party APIs like Stripe, Mailchimp, Wordpress, and Shopify to
            create user accounts for email campaigns, import user content from other platforms, and enable payments.`
        },
        {
            header: 'Using Typescript',
            content: `SOSeo was the first time I used typescript. The application began in javascript, but
            after encountering a runtime error, I decided to give typescript a try. The refactor took some time,
            but it was well worth it. Aside from a large, pre-existing codebase, I see no excuse for not using
            typescript. I love it and will never go back unless I'm only doing an extremely small application 
            (like... only a few hundred lines small).`
        },
        {
            header: 'Responsive Design',
            content: `I used Bootstrap's column and row pattern to control how the site looked at 
            different screen sizes. It works fine, but I've found that it leaks a lot of design logic
            into the layout. Having since used css grids, I think I prefer that. It's much better to
            use a grid template with a media query to hide content--entirely within css--than to
            use hidden column classes. Unless required, I believe css grids is the way to go.`
        },
        {
            header: 'Third-Party API Integrations',
            content: `SOSeo is a feature-rich application. There are payment plans enabled through
            the Stripe API. Users can import content from their Shopify or Wordpress sites. And
            users can opt-in to email newsletters. Delivering these features required extensive use of
            third-party REST APIs and integrations.`
        },
        {
            header: 'DOM Manipulation with Vanilla Javascript',
            content: `The user's core interface with SOSeo is writing content. 
            My initial research into online text editing only led to paid solutions. I started with
            rolling my own online editor to keep cost down. Even with a simple use-case, editing
            text in HTML is quite complicated. Keeping track of cursor selections, text nodes, nested
            tags for bold, italic, and other formatting required a lot of DOM manipulation with the built-in
            javascript methods. I got really far, but the complexity continued to grow, especially with nested
            tags. I ultimately found a free alternative in Squire, but was glad to learn a lot about
            HTML node and DOM manipulation beforehand.`
        },
        {
            header: 'Testing (Chai and Enzyme)',
            content: `I used chai and enzyme for unit testing. It's always good to have unit tests,
            but looking back, I realize I could have done things differently. Having done more development
            since, I realize that a lot of my business logic (incorrectly) lives inside the React component
            classes. The enzyme/frontend tests were often testing things that could have been decoupled
            from frontend components. If I were to refactor SOSeo, I would keep all business logic in
            separate classes outside of React. This would make testing much easier, and just produce
            better, more reusable code overall.`
        }
    ]
}

export default SOSeo