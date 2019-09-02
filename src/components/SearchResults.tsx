import React, { useContext, useEffect } from 'react'
import { getSearchResults } from '../modules/search/getSearchResults'
import SearchResult from './SearchResult'
import Pages from '../pages'
import { SearchContext } from '../context/SearchContext'
import { scrollToTop } from '../modules/scroll/scrollToTop'
import { Page } from '../pages/Page'

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

const RenderLoading = () => (
    <div className='loader page-container' />
)

const SearchResults = (props: { path: string, location?: Location }) => {
    
    const searchContext = useContext(SearchContext)
    const searchQuery = props.location ? convertLocationToQuery(props.location) : ''
    const loading = searchContext.loading
    
    useEffect(() => {
        scrollToTop()
        const fetchedSearchResults = getSearchResults(Pages, searchQuery)
        searchContext.setSearchResults(fetchedSearchResults)
        searchContext.setLoading(false)
        return () => searchContext.setSearchResults([])
    }, [ searchQuery ])

    return (
        <div className='app-container'>
            { loading && RenderLoading() }
            { !loading && searchContext.searchResults.length > 0 && RenderSearchResults(searchContext.searchResults) }
            { !loading && searchContext.searchResults.length === 0 && RenderNoResultsFound() }
        </div>
    )
}

export default React.memo(SearchResults)