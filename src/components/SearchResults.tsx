import React, { useContext, useEffect } from 'react'
import { getSearchResults } from '../modules/search/getSearchResults'
import SearchResult from './SearchResult'
import Pages from '../pages'
import { SearchContext } from '../context/SearchContext'

type Location = {
    pathname: string
    href: string
    origin: string
}

const convertLocationToQuery = (location: Location) => {
    const query = location.href.slice(location.origin.length + location.pathname.length + 'searchQuery'.length + 2)
    return query.replace('+', ' ')
}

const SearchResults = (props: { path: string, location?: Location }) => {
    
    const searchContext = useContext(SearchContext)
    const searchQuery = props.location ? convertLocationToQuery(props.location) : ''
    
    useEffect(() => {
        const fetchedSearchResults = getSearchResults(Pages, searchQuery)
        searchContext.setSearchResults(fetchedSearchResults)

    }, [ searchQuery ])
    
    
    return (
        <ul className='app-container search-results-container'>
            { searchContext.searchResults.map(r => <SearchResult key={r.url} page={r} />) }
        </ul>
    )
}

export default React.memo(SearchResults)