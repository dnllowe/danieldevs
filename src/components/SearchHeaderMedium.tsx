import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { submitSearch } from '../modules/search/submitSearch'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)

    return (
        <form className='search-container-medium' onSubmit={(e) => submitSearch(e, searchContext)}>
            <h1 className='search-header-medium'>Daniel Devs</h1>
            <div className='search-bar-container-medium'>
                <SearchBar />
            </div>
        </form>
    )
}