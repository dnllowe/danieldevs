import { SearchContext } from "../../context/SearchContext"
import { SearchSuggestionsContext } from "../../context/SearchSuggestionsContext"
import navigateToSearch from "./navigateToSearch"

export const submitSearchWithSuggestions = (
    e: Event | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>, 
    searchContext: SearchContext,
    searchSuggestionsContext: SearchSuggestionsContext) => {

    e.preventDefault();
    searchContext.setLoading(true)
    searchContext.setShowSuggestions(false)

    if (searchSuggestionsContext.selection > -1) {
        navigateToSearch(searchSuggestionsContext.getSelectedSuggestion())
        searchContext.setSearchValue(searchSuggestionsContext.getSelectedSuggestion())
    } else {
        submitSearch(e, searchContext)
    }
}

export const submitSearch = (
    e: Event | React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLLIElement, MouseEvent>,
    searchContext: SearchContext) => {

    e.preventDefault();
    searchContext.setLoading(true)
    searchContext.setShowSuggestions(false)
    
    navigateToSearch(searchContext.searchValue)
}