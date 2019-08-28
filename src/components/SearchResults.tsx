import React, { useContext, useEffect } from 'react'
import queryString from 'query-string'
import { getSearchResults } from '../modules/search/getSearchResults'
import SearchResult from './SearchResult'
import Pages from '../pages'
import { SearchContext } from '../context/SearchContext'

type Query = {
    searchQuery: string
}

const SearchResults = (props: { path: string, location?: { search: string }}) => {
    
    const searchContext = useContext(SearchContext)
    const { searchQuery } = queryString.parse(props.location ? props.location.search : '') as Query
    
    useEffect(() => {
        const fetchedSearchResults = getSearchResults(Pages, searchQuery)
        searchContext.setSearchResults(fetchedSearchResults)

    }, [ searchQuery ])
    
    
    return (
        <ul>
            { searchContext.searchResults.map(r => <SearchResult key={r.url} page={r} />) }
        </ul>
    )
}

export default React.memo(SearchResults)