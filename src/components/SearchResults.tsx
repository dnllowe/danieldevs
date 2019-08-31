import React, { useContext, useEffect } from 'react'
import { getSearchResults } from '../modules/search/getSearchResults'
import SearchResult from './SearchResult'
import Pages from '../pages'
import { SearchContext } from '../context/SearchContext'
import { scrollToTop } from '../modules/scroll/scrollToTop'
import Page from '../pages/Page'

type Location = {
    pathname: string
    href: string
    origin: string
}

const convertLocationToQuery = (location: Location) => {
    const query = location.href.slice(location.origin.length + location.pathname.length + 'searchQuery'.length + 2)
    return query.replace('+', ' ')
}

const RenderSearchResults = (pages: Page[]) => (
    <ul className='search-results-container'>
        { pages.map(p => <SearchResult key={p.url} page={p} />) }
    </ul>
)

const RenderNoResultsFound = () => (
    <h1 className='page-section-header no-search-results-container'>
        I didn't find any results for that, sorry.
    </h1>
)

const SearchResults = (props: { path: string, location?: Location }) => {
    
    const searchContext = useContext(SearchContext)
    const searchQuery = props.location ? convertLocationToQuery(props.location) : ''
    
    useEffect(() => {
        scrollToTop()
        const fetchedSearchResults = getSearchResults(Pages, searchQuery)
        searchContext.setSearchResults(fetchedSearchResults)
        return () => searchContext.setSearchResults([])
    }, [ searchQuery ])
    
    
    return (
        <div className='app-container'>
            { searchContext.searchResults.length > 0 && RenderSearchResults(searchContext.searchResults) }
            { !searchContext.searchResults.length && RenderNoResultsFound() }
        </div>
    )
}

export default React.memo(SearchResults)