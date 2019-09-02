import { SearchContext } from "../../context/SearchContext"
import { SearchSuggestionsContext } from "../../context/SearchSuggestionsContext"
import navigateToSearch from "./navigateToSearch"

export const submitSearchWithSuggestions = ( 
    searchContext: SearchContext,
    searchSuggestionsContext: SearchSuggestionsContext) => {

    searchContext.setShowSuggestions(false)

    if (searchSuggestionsContext.selection > -1) {
        navigateToSearch(searchSuggestionsContext.getSelectedSuggestion())
        searchContext.setSearchValue(searchSuggestionsContext.getSelectedSuggestion())
    } else {
        submitSearch(searchContext)
    }
}

export const submitSearch = (searchContext: SearchContext) => {

    searchContext.setShowSuggestions(false)
    navigateToSearch(searchContext.searchValue)
}