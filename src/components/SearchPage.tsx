import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { getSearchResults } from '../modules/search/getSearchResults'
import SearchResult from './SearchResult';

export default () => {

    const searchContext = useContext(SearchContext)

    return (
        <div>
            <SearchBar />
            <button onClick={() => { 
                searchContext.setResults(getSearchResults(searchContext.searchValue))}
            }>
                Search
            </button>
            <button>I'm Feeling Lucky</button>
            { searchContext.results.map(r => <SearchResult key={r.url} page={r} />) }
        </div>
    )
}