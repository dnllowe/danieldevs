import Page from "./Page"

type PageSection = {
    header: string
    content: string
}

const SamplePage: Page = {
    title: 'Sample Page',
    keywords: ['sample', 'test', 'page', 'code', 'developer', 'run'],
    description: 'A sample page to test components',
    url: 'sample-page',
    content: [
        {
            header: 'Overview',
            content: 'A sample page to test componets'
    }],
    rank: 0
}

export default SamplePage