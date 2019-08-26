import Page from '../Page'

const DotAlignRestApi: Page = {
    title: 'DotAlign Cloud REST API',
    description: 'DotAlign REST API that provides insights from the severless cloud application',
    keywords: ['dotalign', 'rest api', 'api', 'rest'],
    url: 'dotalign/rest-api',
    languages: ['C#', '.NET'],
    content: [
        {
            header: 'Overview',
            content: `The DotAlign REST API provides access to analytics on user email data and a
            mechanism to create and alter teams and users in the application. In addition to standard
            CRUD operations, I implemented middleware that powers admin consent for the applicatoin's permissions,
            custom Azure Active Directory-based authorization, and user authentication through OAuth.`
        }
    ],
    rank: 0
}

export default DotAlignRestApi