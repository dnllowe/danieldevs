import { getAllWordForms } from './getAllWordForms'
import Page from '../../pages/Page'

export const getSearchResults = (pages: Page[], searchValue: string) => {
    
    searchValue = searchValue.toLowerCase()
    const pagesCopy = [...pages]

    pagesCopy.forEach((p, i) => {

        const pageCopy = Object.assign({}, {...p})
        pagesCopy[i] = pageCopy

        const title = pageCopy.title.toLowerCase()
        const description = pageCopy.description.toLowerCase()

        const titleWords = title.split(' ')
        const descriptionWords = description.split(' ')
        const urlWords = pageCopy.url.replace('/', '').split('-')
        const searchWords = searchValue.split(' ')

        pageCopy.content.forEach(c => {
            const header = c.header.toLowerCase()
            const content = c.content.toLowerCase()

            const headerWords = header.split(' ')
            const contentWords = content.split(' ')

            headerWords.forEach(word => {
                if (searchValue.includes(word)) {
                    pageCopy.rank += 3
                }
            })

            contentWords.forEach(word => {
                searchWords.forEach(searchWord => {
                    if (searchWord === word) {
                        pageCopy.rank++
                    }
                })
            })
        })

        pageCopy.keywords.forEach(keyword => {
            
            const eachKeyWord = keyword.split(' ')

            eachKeyWord.forEach(kw => {
                const allForms = getAllWordForms(kw)
                allForms.forEach(kw => {
                    if (searchValue.includes(kw.toLowerCase())) {
                        pageCopy.rank += 5
                    }
                })
            })
        })

        pageCopy.technologies && pageCopy.technologies.forEach(technology => {
            if (searchValue.includes(technology.toLowerCase())) {
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
    })

    const rankedPages = pagesCopy.filter(p => p.rank)
    const sortedPages = rankedPages.sort((a, b) => b.rank - a.rank)
    
    return sortedPages
}