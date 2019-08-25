import { getAllKeywords } from '../../../modules/search/allKeywords'
import Page from '../../../pages/Page'

const TestPageOne: Page = {
    title: 'Sample Page',
    keywords: [ 'sample', 'react', 'test', 'page', 'developer' ],
    description: 'A sample page to test components',
    url: '/sample-page-one',
    content: [
        { 
            header: 'Overview',
            content: 'This is just a sample page to help see if components render properly.'
        }
    ],
    rank: 0
}

const TestPageTwo: Page = {
    title: 'Sample Page',
    keywords: ['sample', 'test', 'jest', 'react' ],
    description: 'A sample page to test components',
    url: '/sample-page-two',
    content: [
        {
            header:'Overview',
            content:'This is just a sample page to help see if components render properly.'
        }
    ],
    rank: 0
}

it('returns a distinct list of keywords for all pages', () => {
    const expected = ['sample', 'react', 'test', 'page', 'developer', 'jest']
    const actual = getAllKeywords([ TestPageOne, TestPageTwo ])
    expect(actual).toEqual(expected)
})