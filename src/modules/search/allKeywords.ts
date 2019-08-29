import Page from '../../pages/Page'

export const getAllKeywords = (pages: Page[]) => {
    
    const keywords: string[] = []
    const keywordMap: { [key: string]: boolean } = {}

    pages.forEach(page => {
        page.keywords.forEach(keyword => {
            
            if (!keywordMap[keyword]) {
                keywords.push(keyword)
                keywordMap[keyword] = true
            }
        })

        page.technologies && page.technologies.forEach(technology => {

            if (!keywordMap[technology]) {
                keywords.push(technology)
                keywordMap[technology] = true
            }
        })
    })

    return keywords
}