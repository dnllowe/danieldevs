import { navigate } from "@reach/router"
import { SearchContext } from "../../context/SearchContext"
import Pages from '../../pages'
import { Page } from "../../pages/Page"

export const goToRandomPage = (searchContext: SearchContext) => {
    searchContext.setShowSuggestions(false);
    const page = getRandomPage(Pages)
    navigate(`/${page.url}`)
}

const getRandomPage = (pages: Page[]) => {
    const index = Math.round(Math.random() * pages.length);
    const page = pages[index]
    
    return page
}