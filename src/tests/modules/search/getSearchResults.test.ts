import { getSearchResults } from '../../../modules/search/getSearchResults'
import Page from '../../../pages/Page'

const ReactTestPage: Page = {
    title: 'React Testing',
    keywords: [ 'react', 'test' ],
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

const pages = [ ReactTestPage, NodeTestPage ]
it('returns pages matching search phrase', () => {
    const reactPageResults = getSearchResults(pages, 'react')
    const nodePageResults = getSearchResults(pages, 'node')
    const testPageResults = getSearchResults(pages, 'testing')

    expect(reactPageResults[0].title).toEqual(ReactTestPage.title)
    expect(nodePageResults[0].title).toEqual(NodeTestPage.title)
    expect(testPageResults[0].title).toEqual(NodeTestPage.title)
    expect(testPageResults[1].title).toEqual(ReactTestPage.title)
})