import { getSearchResults } from '../../../modules/search/getSearchResults'
import { Page } from '../../../pages/Page'
import ContactInfo from '../../../pages/Contact'
import DockerMigration from '../../../pages/dotalign/DotAlignDockerMigration'

const ReactTestPage: Page = {
    title: 'React Testing',
    keywords: [ 'react', 'test', 'react native' ],
    description: 'A page about React and testing.',
    url: '/react-test',
    content: [
        { 
            header: 'Overview',
            content: 'This is a page about React and testing.'
        }
    ],
    rank: 0
}

const NodeTestPage: Page = {
    title: 'Node Testing',
    keywords: ['node', 'test' ],
    description: 'A page about Node and testing. And it talks about testing more.',
    url: '/node-test',
    content: [
        {
            header: 'Overview',
            content: 'This is a page about Node and testing. And it talks about testing more.'
        }
    ],
    rank: 0
}

const ContentMatchPage: Page = {
    title: 'Content Match',
    keywords: ['sample', 'page' ],
    description: 'sample',
    url: '/sample',
    content: [
        {
            header: 'Overview',
            content: "This page will match on the word content-match because the word content is in a content section."
        }
    ],
    rank: 0
}

const PunctuationTestPage: Page = {
    title: 'Punctuation-Testing',
    keywords: ['punctuation!', 'test' ],
    description: 'Punctuation!',
    url: '/',
    content: [
        {
            header: 'Overview',
            content: `.,@!$%^&*(punctuation)<>/?;:'"'\`][{}=_~|\\/]`
        }
    ],
    rank: 0
}

const pages = [ ReactTestPage, NodeTestPage, ContentMatchPage ]
it('returns pages matching search phrase', () => {
    const reactPageResults = getSearchResults(pages, 'react')
    const nodePageResults = getSearchResults(pages, 'node')
    const testPageResults = getSearchResults(pages, 'testing')

    expect(reactPageResults[0].title).toEqual(ReactTestPage.title)
    expect(nodePageResults[0].title).toEqual(NodeTestPage.title)
    expect(testPageResults[0].title).toEqual(NodeTestPage.title)
    expect(testPageResults[1].title).toEqual(ReactTestPage.title)
})

it('finds search result if multi-word keyword contains phrase', () => {
    const reactPageResults = getSearchResults(pages, 'native')
    expect(reactPageResults[0].title).toEqual(ReactTestPage.title)
})

it('matches on content, regardless of letter casing', () => {
    const contentMatchPageResults = getSearchResults(pages, 'content-match')
    expect(contentMatchPageResults[0].title).toEqual(ContentMatchPage.title)
})

it('does not match on partial words', () => {
    const actual = getSearchResults([ ContactInfo ], 'r')
    expect(actual).toEqual([])
})

it('does not match on no input or white space', () => {
    const noInput = getSearchResults([ ContactInfo ], '')
    const whiteSpace = getSearchResults([ ContactInfo ], ' ')
    expect(noInput).toEqual([])
    expect(whiteSpace).toEqual([])
})

it('does not match on irrelevant keywords', () => {
    debugger
    const actual = getSearchResults([ ContactInfo, DockerMigration ], 'contact')
    expect(actual[0].title).toEqual(ContactInfo.title)
    expect(actual.length).toEqual(1)
})

it('ignores punctuation', () => {
    debugger
    const actual = getSearchResults([ PunctuationTestPage ], 'punctuation')
    expect(actual[0].title).toEqual(PunctuationTestPage.title)
})