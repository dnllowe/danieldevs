import React, { useContext } from 'react'
import { Router, navigate } from '@reach/router'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import SearchResults from './SearchResults'
import Page from './Page'
import '../styles/SearchBar.scss'

export default () => {

    const searchContext = useContext(SearchContext)

    return (
        <div>
            <div className='search-bar-container'>
                <h1 className='search-header'>Daniel Devs</h1>
                <SearchBar />
                <button 
                    className='search-button'
                    onClick={() => { 
                    navigate(`/search?searchQuery=${searchContext.searchValue.replace(/\s+/g, '+')}`)
                }}>
                    Search
                </button>
                <button className='search-button'>I'm Feeling Lucky</button>
            </div>
            <Router>
                <SearchResults path='/search' />
                <Page path='/pages/:page-url' />
                <Page path='/pages/dotalign/:page-url' />
            </Router>
        </div>
    )
}