import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { navigate } from '@reach/router'
import { SearchContext } from '../context/SearchContext'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)
    
    return (
        <form className='search-bar-container' onSubmit={(e) => { 
            e.preventDefault()
            navigate(`/search?searchQuery=${searchContext.searchValue.replace(/\s+/g, '+')}`)}
        }>
            <h1 className='search-header'>Daniel Devs</h1>
            <SearchBar />
            <button 
                className='search-button'
                onClick={(e) => { 
                    e.preventDefault()
                    navigate(`/search?searchQuery=${searchContext.searchValue.replace(/\s+/g, '+')}`)
            }}>
                Search
            </button>
            <button className='search-button'>I'm Feeling Lucky</button>
        </form>
    )
}