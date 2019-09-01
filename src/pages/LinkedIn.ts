import { Page } from './Page'

const LinkedIn: Page = {
    title: 'LinkedIn',
    description: 'Check out my LinkedIn page at https://www.linkedin/com/in/dnllowe',
    keywords: ['linkedin'],
    rank: 0,
    content: [{
        header: '',
        content: 'Check out my work history and experince on LinkedIn.',
        relatedPages: [
            {
                url: 'https://linkedin.com/in/dnllowe',
                text: 'My LinkedIn page',
                external: true
            }
        ]
    }],
    url: 'linkedin'
}

export default LinkedIn