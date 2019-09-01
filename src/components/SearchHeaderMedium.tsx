import React, { useContext, useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { SearchContext } from '../context/SearchContext'
import { submitSearch } from '../modules/search/submitSearch'
import SearchSuggestions from './SearchSuggestions'
import { Link } from '@reach/router'

const SHOW_SEARCH_THRESHOLD = 100

export default (props: { path: string }) => {
    
    const searchContext = useContext(SearchContext)
    const [ adjustedContainerClass, setAdjustedContainerClass ] = useState('')
    const [ eventListenerAdded, setEventListenerAdded ] = useState(false)
    const [ scrollY, updateScrollY ] = useState(window.scrollY)
    
    useEffect(() => {

        const scrollCallback = (e: Event) => updateScrollY(window.scrollY)

        if (!eventListenerAdded) {
            window.addEventListener('scroll', scrollCallback)
            setEventListenerAdded(true)
        }

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
        <form className={`search-container-medium ${adjustedContainerClass} search-grid`} onSubmit={(e) => submitSearch(e, searchContext)}>
            <Link to='/'>
                <h1 className='search-header-medium search-header-area'>Daniel Devs</h1>
            </Link>
            <div className='search-bar-container-medium'>
                <SearchBar />
                { searchContext.showSuggestions && 
                    <div className='search-suggestions-container-medium'>
                        <SearchSuggestions />
                    </div> 
                }
            </div>
        </form>
    )
}