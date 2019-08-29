import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { navigate } from '@reach/router'
import { SearchContext } from '../context/SearchContext'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)

    return (
        <form 
            className='search-bar-container-medium' 
            onSubmit={(e) => { 
                e.preventDefault()
                navigate(`/search?searchQuery=${searchContext.searchValue.replace(/\s+/g, '+')}`)}
            }
        >
            <h1 className='search-header-medium'>Daniel Devs</h1>
            <SearchBar />
        </form>
    )
}