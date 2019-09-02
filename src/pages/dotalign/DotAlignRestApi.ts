import { Page } from '../Page'

const DotAlignRestApi: Page = {
    title: 'DotAlign Cloud REST API',
    description: 'DotAlign REST API that provides insights from the severless cloud application',
    keywords: ['dotalign', 'work experience', 'rest api', 'api', 'rest', 'backend'],
    url: 'dotalign/rest-api',
    technologies: ['c#', '.net'],
    projectDates: '2018-2019',
    content: [
        {
            header: 'Overview',
            content: `The DotAlign REST API provides access to analytics on user email data and a
            mechanism to create and alter teams and users in the application. In addition to standard
            CRUD operations, I implemented middleware that powers admin consent for the application's permissions,
            custom Azure Active Directory-based authorization, and user authentication through OAuth.`,
            relatedPages: [
                {
                    url: '/dotalign/frontend-portal',
                    text: 'DotAlign Portal UI',
                    external: false
                }
            ]
        }
    ],
    rank: 0
}

export default DotAlignRestApi