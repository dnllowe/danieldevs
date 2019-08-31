import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { submitSearch } from '../modules/search/submitSearch'
import SearchSuggestions from './SearchSuggestions'
import { Link } from '@reach/router'

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)

    return (
        <form className='search-container-medium' onSubmit={(e) => submitSearch(e, searchContext)}>
            <Link to='/'>
                <h1 className='search-header-medium'>Daniel Devs</h1>
            </Link>
            <div className='search-bar-container-medium'>
                <SearchBar />
                {/* { searchContext.showSuggestions && <SearchSuggestions /> } */}
            </div>
        </form>
    )
}