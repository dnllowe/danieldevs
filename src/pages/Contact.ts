import { Page } from './Page'

const Contact: Page = {
    title: 'Contact Information',
    description: "You can email me at dnllowe2@gmail.com. If you'd like to speak on the phone, please email first :)",
    keywords: ['contact', 'email'],
    url: 'contact',
    rank: 0,
    content: [{
        header: '',
        content: "You can email me at dnllowe2@gmail.com. If you'd like to speak on the phone, please email first :)",
        relatedPages: [
            {
                url: '/resume',
                text: 'Check out my resume',
                external: false
            },
            {
                url: 'https://www.linkedin.com/in/dnllowe',
                text: 'Check out my LinkedIn page',
                external: true
            }
        ]
    }]
}

export default Contact