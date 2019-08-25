import React from 'react'
import queryString from 'query-string'
import { getSearchResults } from '../modules/search/getSearchResults'
import SearchResult from './SearchResult';

type Query = {
    searchQuery: string
}

export default (props: { path: string, location?: { search: string }}) => {
    
    const { searchQuery } = queryString.parse(props.location ? props.location.search : '') as Query
    const searchResults = getSearchResults(searchQuery)
    
    return (
        <ul>
            { searchResults.map(r => <SearchResult key={r.url} page={r} />) }
        </ul>
    )
}