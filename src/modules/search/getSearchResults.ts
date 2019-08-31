import { getAllWordForms } from './getAllWordForms'
import Page from '../../pages/Page'

const createSearchMap = (searchValue: string) => {
    const searchMap: { [key: string]: string } = {}

    searchValue.split(' ').forEach(word => {
        searchMap[word] = word
    })

    return searchMap
}
export const getSearchResults = (pages: Page[], searchValue: string) => {
    
    searchValue = searchValue.trim()

    if (searchValue === '') { return []}

    searchValue = searchValue.toLowerCase()
    const searchMap = createSearchMap(searchValue)
    const pagesCopy = [...pages]

    pagesCopy.forEach((p, i) => {

        const pageCopy = Object.assign({}, {...p})
        pagesCopy[i] = pageCopy

        const title = pageCopy.title.toLowerCase()
        const description = pageCopy.description.toLowerCase()

        const titleWords = title.length ? title.split(' ') : []
        const descriptionWords = description.length ? description.split(' ') : []
        const urlWords = pageCopy.url.replace('/', '').split('-')

        pageCopy.content.forEach(c => {
            const header = c.header.toLowerCase()
            const content = c.content.toLowerCase()

            const headerWords = header.length ? header.split(' ') : []
            const contentWords = content.length ? content.split(' ') : []

            headerWords.forEach(word => {
                if (searchMap[word]) {
                    pageCopy.rank += 3
                }
            })

            contentWords.forEach(word => {
                if (searchMap[word]) {
                    pageCopy.rank++
                }
            })
        })

        pageCopy.keywords.forEach(keyword => {
            
            const eachKeyWord = keyword.split(' ')

            eachKeyWord.forEach(kw => {
                const allForms = getAllWordForms(kw)
                allForms.forEach(kw => {
                    if (searchMap[kw.toLowerCase()]) {
                        pageCopy.rank += 5
                    }
                })
            })
        })

        pageCopy.technologies && pageCopy.technologies.forEach(technology => {
            if (searchMap[technology.toLowerCase()]) {
                pageCopy.rank += 5
            }
        })

        titleWords.forEach(word => {
            if (searchMap[word]) {
                pageCopy.rank += 5
            }
        })

        descriptionWords.forEach(word => {
            if (searchMap[word]) {
                pageCopy.rank += 5
            }
        })

        urlWords.forEach(word => {
            if (searchMap[word]) {
                pageCopy.rank +=5
            }
        })
    })

    const rankedPages = pagesCopy.filter(p => p.rank)
    const sortedPages = rankedPages.sort((a, b) => b.rank - a.rank)
    
    return sortedPages
}