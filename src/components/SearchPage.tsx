import React, { useContext } from 'react'
import { Router, navigate } from '@reach/router'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import SearchResults from './SearchResults'
import Page from './Page'

export default () => {

    const searchContext = useContext(SearchContext)

    return (
        <div>
            <SearchBar />
            <button onClick={() => { 
                navigate(`/search?searchQuery=${searchContext.searchValue.replace(/\s+/g, '+')}`)
            }}>
                Search
            </button>
            <button>I'm Feeling Lucky</button>
            <Router>
                <SearchResults path='/search' />
            </Router>
            <Router>
                <Page path='/pages/:page-url' />
            </Router>
        </div>
    )
}