import pages from '../../pages'
import { getAllWordForms } from './getAllWordForms'

export const getSearchResults = (searchValue: string) => {
    
    searchValue = searchValue.toLowerCase()
    const pagesCopy = [...pages]

    pagesCopy.forEach((p, i) => {

        const pageCopy = Object.assign({}, {...p})
        pagesCopy[i] = pageCopy

        const titleWords = pageCopy.title.split(' ')
        const descriptionWords = pageCopy.description.split(' ')
        const urlWords = pageCopy.url.replace('/', '').split('-')
        const contentWords = pageCopy.content.split(' ')

        pageCopy.keywords.forEach(keyword => {
            const all = getAllWordForms(keyword)
            if (searchValue.includes(keyword)) {
                pageCopy.rank += 5
            }
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

        contentWords.forEach(word => {
            if (searchValue.includes(word)) {
                pageCopy.rank++
            }
        })
    })

    const rankedPages = pagesCopy.filter(p => p.rank)
    const sortedPages = rankedPages.sort((a, b) => a.rank - b.rank)
    
    return sortedPages
}