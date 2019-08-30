import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { submitSearch } from '../modules/search/submitSearch'
import SearchSuggestions from './SearchSuggestions'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)
    
    return (
        <form className='search-container' onSubmit={(e) => submitSearch(e, searchContext)}>
            <h1 className='search-header'>Daniel Devs...</h1>
            <SearchBar />
            { searchContext.showSuggestions && <SearchSuggestions /> }
            <div className='search-buttons-container'>
                <button className='search-button' onClick={(e) => submitSearch(e, searchContext)}>
                    Search
                </button>
                <button className='search-button'>I'm Feeling Lucky</button>

            </div>
        </form>
    )
}
