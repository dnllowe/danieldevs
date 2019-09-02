import { Page } from './Page'

const GitHub: Page = {
    title: 'My GitHub',
    description: 'Check out my code on GitHub at https://www.github.com/dnllowe.',
    keywords: [ 'git', 'github', 'projects', 'work experience' ],
    url: 'github',
    rank: 0,
    image: {
        url: '/github.jpg',
        caption: 'The GitHub logo belongs to GitHub. Other legal sounding stuff...',
        className: 'github-img'
    },
    technologies: [ 'git', 'github' ],
    content: [
        {
            header: '',
            content: `I use git and GitHub as my go-to for version control. 
            Check out my code on GitHub. Some of the more interesting repos are private,
            but feel free to reach out if you want a closer look.`,
            relatedPages: [
                {
                    url: 'https://github.com/dnllowe',
                    text: 'My GitHub page',
                    external: true
                }
            ]
        }
    ]
}

export default GitHub