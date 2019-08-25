import Pages from '../../pages'

let keywords: string[] = []

Pages.forEach(page => {
    keywords = keywords.concat(page.keywords)
})

export default keywords