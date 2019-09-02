import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import { getAllKeywords } from '../modules/search/allKeywords'
import Pages from '../pages'
import { getSuggestions } from '../modules/search/suggestions'
import { SearchSuggestionsContext } from '../context/SearchSuggestionsContext'
import navigateToSearch from '../modules/search/navigateToSearch'

const keywords = getAllKeywords(Pages)

export default () => {

    const searchContext = useContext(SearchContext)
    const searchSuggestionsContext = useContext(SearchSuggestionsContext)
    const { setSuggestions } = searchSuggestionsContext
    
    useEffect(() => {
        const suggestions = getSuggestions(keywords, searchContext.searchValue)
        setSuggestions(suggestions)
    }, [ searchContext.searchValue, setSuggestions ])

    const suggestions = searchSuggestionsContext.suggestions
    const selectedSuggestion = searchSuggestionsContext.getSelectedSuggestion()

    return (
        <ul className='search-suggestions-area'>
            {suggestions.map(suggestion => {
                return (
                    <li
                        className={`search-suggestion ${suggestion === selectedSuggestion && 'search-suggestion-selected'}`}
                        key={suggestion}
                        onClick={(e) => { 
                            e.preventDefault()
                            searchContext.setSearchValue(suggestion)
                            searchContext.setShowSuggestions(false)
                            searchContext.setLoading(true)
                            navigateToSearch(suggestion)
                        }}
                    >
                        {suggestion}
                    </li>
                )
            })}
        </ul>
    )
}