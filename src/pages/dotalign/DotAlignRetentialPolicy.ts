import Page from '../Page'

const DotAlignMergeUsers: Page = {
    title: 'DotAlign Data Retention Policy Support',
    description: "Allows clients to clear data from DotAlign user's databases",
    keywords: ['sql', 'dotalign', 'work experience', 'backend'],
    languages: ['sql'],
    url: 'dotalign/retention-policy-support',
    content: [
        {
            header: 'Overview',
            content: `A common business need for some clients is to clear internal data periodically. 
            This, of course, includes data DotAlign persists. To comply with this need, I created a SQL
            step that runs periodically on all tables that store email data. If the creation date of the
            message items exceeds the retention policy, the data is cleared.`
        }
    ],
    rank: 0
}

export default DotAlignMergeUsers