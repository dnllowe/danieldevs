import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { SearchSuggestionsContext } from '../context/SearchSuggestionsContext'
import { submitSearch, submitSearchWithSuggestions } from '../modules/search/submitSearch'
import SearchSuggestions from './SearchSuggestions'
import { goToRandomPage } from '../modules/search/goToRandomPage'
import handleSearchSelectionInput from '../modules/events/handleSearchSelectionInput'
import { runAtEndOfEventLoop } from '../modules/events/runAtEndOfEventLoop'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)
    const searchSuggestionsContext = useContext(SearchSuggestionsContext)
    
    return (
        <div>

            <form className='search-container' 
                onSubmit={(e) => {
                    e.preventDefault()
                    submitSearchWithSuggestions(searchContext, searchSuggestionsContext)
                }}
                onKeyDown={(e) => handleSearchSelectionInput(e, searchSuggestionsContext)}
                onBlur={(e) => runAtEndOfEventLoop(() => searchContext.setShowSuggestions(false))}
            >
                <h1 className='search-header'>Daniel Devs...</h1>
                <SearchBar />
                { searchContext.showSuggestions && 
                    <div className='search-suggestions-container'>
                        <SearchSuggestions />
                    </div> 
                }
                
            </form>
            <div className='search-buttons-container'>
                <button className='search-button' onClick={(e) => submitSearch(searchContext)}>
                    Search
                </button>
                <button className='search-button' onClick={(e) => { 
                    e.preventDefault()
                    goToRandomPage(searchContext)}}
                >
                    I'm Feeling Lucky
                </button>
            </div>
        </div>
    
    )
}
