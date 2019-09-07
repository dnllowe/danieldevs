import React, { useContext, useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { submitSearchWithSuggestions } from '../modules/search/submitSearch'
import SearchSuggestions from './SearchSuggestions'
import { Link } from '@reach/router'
import handleSearchSelectionInput from '../modules/events/handleSearchSelectionInput'
import { SearchSuggestionsContext } from '../context/SearchSuggestionsContext'

const SHOW_SEARCH_THRESHOLD = 100

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)
    const searchSuggestionsContext = useContext(SearchSuggestionsContext)
    const [ adjustedContainerClass, setAdjustedContainerClass ] = useState('')
    const [ scrollY, updateScrollY ] = useState(window.scrollY)
    
    useEffect(() => {
        const scrollCallback = (e: Event) => updateScrollY(window.scrollY)
        window.addEventListener('scroll', scrollCallback)
        return () => window.removeEventListener('scroll', scrollCallback )
    }, [])

    useEffect(() => {

        if (scrollY > SHOW_SEARCH_THRESHOLD) {
            setAdjustedContainerClass('search-container-exit')
        }

        if (scrollY <= SHOW_SEARCH_THRESHOLD) {
            setAdjustedContainerClass('search-container-enter')
        }

    }, [ scrollY ])

    return (
        <form 
            className={`search-container-medium ${adjustedContainerClass} search-grid`} 
            onSubmit={(e) => { 
                e.preventDefault()
                submitSearchWithSuggestions(searchContext, searchSuggestionsContext)
            }}
            onKeyDown={(e) => handleSearchSelectionInput(e, searchSuggestionsContext)}
        >
            <Link to='/'>
                <h1 className='search-header-medium search-header-area'>Daniel Devs</h1>
            </Link>
            <div className='search-bar-container-medium'>
                <SearchBar />
                <i className="search-bar-icon-medium fas fa-times" onClick={() => searchContext.setSearchValue('')} />
                { searchContext.showSuggestions && 
                    <div className='search-suggestions-container-medium'>
                        <SearchSuggestions />
                    </div> 
                }
            </div>
        </form>
    )
}