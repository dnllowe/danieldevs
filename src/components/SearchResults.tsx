import React, { useContext, useEffect, useState } from 'react'
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

const SearchResultsList = (props: { pages: Page[] }) => (
    <ul className='search-results-container'>
        { props.pages.map(p => <SearchResult key={p.url} page={p} />) }
    </ul>
)

const NoResultsFound = () => (
    <h1 className='page-section-header no-search-results-container'>
        I didn't find any results for that, sorry.
    </h1>
)

const Loader = () => (
    <div className='loader-container'>
        <div className='loader' />
    </div>
)

const SearchResults = (props: { path: string, location?: Location }) => {
    
    const searchQuery = props.location ? convertLocationToQuery(props.location) : ''
    const [ searchResults, setSearchResults ] = useState<Page[]>([])
    const searchContext = useContext(SearchContext)
    const { loading, setLoading, setSearchValue } = searchContext
    
    useEffect(() => {
        scrollToTop()
        setSearchValue(searchQuery)
        setLoading(true)
        setSearchResults(getSearchResults(Pages, searchQuery))
    }, [ searchQuery, setLoading, setSearchValue, setSearchResults ])

    useEffect(() => {
        scrollToTop()
        setLoading(false)
    }, [ setLoading, searchResults ])

    useEffect(() => {
        return () => {
            setLoading(true)
            setSearchResults([])
        }
    }, [ setLoading, setSearchResults ])

    return (
        <div className='app-container'>
            { loading && <Loader /> }
            { !loading && searchResults.length > 0 && <SearchResultsList pages={searchResults} /> }
            { !loading && searchResults.length === 0 && <NoResultsFound /> }
        </div>
    )
}

export default React.memo(SearchResults)