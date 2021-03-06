import { Page } from '../../pages/Page'

export const getPagesByUrl = (pages: Page[]) => {
    const pagesByUrl: { [key: string]: Page } = {}

    pages.forEach(page => {
        pagesByUrl['/' + page.url] = page
    })

    return pagesByUrl
}