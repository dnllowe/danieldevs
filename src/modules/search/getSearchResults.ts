import { getAllWordForms } from './getAllWordForms'
import Page from '../../pages/Page'

export const getSearchResults = (pages: Page[], searchValue: string) => {
    
    searchValue = searchValue.toLowerCase()
    const pagesCopy = [...pages]

    pagesCopy.forEach((p, i) => {

        const pageCopy = Object.assign({}, {...p})
        pagesCopy[i] = pageCopy

        const titleWords = pageCopy.title.split(' ')
        const descriptionWords = pageCopy.description.split(' ')
        const urlWords = pageCopy.url.replace('/', '').split('-')

        pageCopy.content.forEach(c => {
            const headerWords = c.header.split(' ')
            const contentWords = c.content.split(' ')

            headerWords.forEach(word => {
            
                if (searchValue.includes(word)) {
                    pageCopy.rank += 3
                }
            })

            contentWords.forEach(word => {
        
                if (searchValue.includes(word)) {
                    pageCopy.rank++
                }
            })

        })

        pageCopy.keywords.forEach(keyword => {
            const allForms = getAllWordForms(keyword)
            allForms.forEach(kw => {
                if (searchValue.includes(kw)) {
                    pageCopy.rank += 5
                }
            })
        })

        titleWords.forEach(word => {
            if (searchValue.includes(word)) {
                pageCopy.rank += 5
            }
        })

        descriptionWords.forEach(word => {
            if (searchValue.includes(word)) {
                pageCopy.rank += 5
            }
        })

        urlWords.forEach(word => {
            if (searchValue.includes(word)) {
                pageCopy.rank +=5
            }
        })
    })

    const rankedPages = pagesCopy.filter(p => p.rank)
    const sortedPages = rankedPages.sort((a, b) => b.rank - a.rank)
    
    return sortedPages
}