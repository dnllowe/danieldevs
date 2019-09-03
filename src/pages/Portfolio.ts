import { Page } from './Page'

const Portfolio: Page = {
    title: 'My Online Portfolio',
    description: 'Check out my online portfolio to get a sense of my skills and experiences',
    keywords: ['portfolio', 'resume', 'projects', 'skills'],
    url: 'online-portfolio',
    rank: 0,
    projectDates: '2019',
    content: [
        {
            header: "You're Looking At It.",
            content: `I intentionally modelled this site after Google as my online portfolio.
            Every developer needs an attention-grabbing portfolio, and I figure, why not
            showcase some engineering skills while also making the portfolio tailored to whatever
            the viewer is looking for. I get asked a variety of questions about my skills and work,
            and I felt this was the best way to have that dialogue when I'm not there :)`
        },
        {
            header: 'Check Out the Code',
            content: `I've placed the code for this very site on GitHub for you to check out.
            Most of my recent code is locked behind private repos, so this gives you a chance to
            see some interesting, up-to-date work. Go ahead and give it a look!
            `,
            relatedPages: [
                {
                    url: 'https://github.com/dnllowe/danieldevs/tree/master/src',
                    text: 'Source code for Online Portfolio',
                    external: true
                }
            ]
        }
],
}

export default Portfolio