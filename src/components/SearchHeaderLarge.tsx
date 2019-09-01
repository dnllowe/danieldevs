import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { SearchSuggestionsContext } from '../context/SearchSuggestionsContext'
import { submitSearch, submitSearchWithSuggestions } from '../modules/search/submitSearch'
import SearchSuggestions from './SearchSuggestions'
import { goToRandomPage } from '../modules/search/goToRandomPage'
import handleSearchSelectionInput from '../modules/events/handleSearchSelectionInput'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)
    const searchSuggestionsContext = useContext(SearchSuggestionsContext)
    
    return (
        <div>

            <form className='search-container' 
                onSubmit={(e) => submitSearchWithSuggestions(e, searchContext, searchSuggestionsContext)} 
                onKeyDown={(e) => handleSearchSelectionInput(e, searchSuggestionsContext)
            }>
                <h1 className='search-header'>Daniel Devs...</h1>
                <SearchBar />
                { searchContext.showSuggestions && 
                    <div className='search-suggestions-container'>
                        <SearchSuggestions />
                    </div> 
                }
                
            </form>
            <div className='search-buttons-container'>
                <button className='search-button' onClick={(e) => submitSearch(e, searchContext)}>
                    Search
                </button>
                <button className='search-button' onClick={(e) => goToRandomPage(e, searchContext)}>
                    I'm Feeling Lucky
                </button>
            </div>
        </div>
    
    )
}
