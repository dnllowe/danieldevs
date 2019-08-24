import pages from '../../pages'

const getSearchResults = (searchValue: string) => {
    
    searchValue = searchValue.toLowerCase()
    const pagesCopy = [...pages]

    pagesCopy.forEach((p, i) => {

        const pageCopy = Object.assign({}, {...p})
        pagesCopy[i] = pageCopy

        const titleWords = pageCopy.title.split(' ')
        const descriptionWords = pageCopy.description.split(' ')
        const urlWords = pageCopy.url.replace('/', '').split('-')

        pageCopy.keywords.forEach(kw => {
            if (searchValue.includes(kw)) {
                pageCopy.rank += 5
            }
        })

        titleWords.forEach(t => {
            if (searchValue.includes(t)) {
                pageCopy.rank += 5
            }
        })

        descriptionWords.forEach(d => {
            if (searchValue.includes(d)) {
                pageCopy.rank += 5
            }
        })

        urlWords.forEach(u => {
            if (searchValue.includes(u)) {
                pageCopy.rank +=5
            }
        })
    })

    const rankedPages = pagesCopy.filter(p => p.rank)
    const sortedPages = rankedPages.sort((a, b) => a.rank - b.rank)
    
    return sortedPages
}

export default getSearchResults