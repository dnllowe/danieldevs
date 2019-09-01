import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { getAllKeywords } from '../modules/search/allKeywords'
import Pages from '../pages'
import { getSuggestions } from '../modules/search/suggestions'

const keywords = getAllKeywords(Pages)

export default () => {

    const searchContext = useContext(SearchContext)
    const suggestions = getSuggestions(keywords, searchContext.searchValue)

    return (
        <ul className='search-suggestions-area'>
            {suggestions.map(suggestion => {
                return (
                    <li
                        className='search-suggestion'
                        key={suggestion}
                        onClick={() => { 
                            searchContext.setSearchValue(suggestion)
                            searchContext.setShowSuggestions(false)
                        }}
                    >
                        {suggestion}
                    </li>
                )
            })}
        </ul>
    )
}