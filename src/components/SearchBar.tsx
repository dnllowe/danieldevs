import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export default () => {

    const searchContext = useContext(SearchContext)
    
    return (
        <div className='search-bar search-bar-area'>
            <input 
                className='search-bar-input'
                value={searchContext.searchValue}
                placeholder={'Search what Daniel can do'}
                onChange={(e) => { 
                    
                    const searchValue = e.currentTarget.value
                    searchContext.setSearchValue(searchValue)

                    if (searchValue) {
                        searchContext.setShowSuggestions(true)
                    } else {
                        searchContext.setShowSuggestions(false)
                    }
                }}
             />
        </div>
    )
}