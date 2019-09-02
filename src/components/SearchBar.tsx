import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export default () => {

    const searchContext = useContext(SearchContext)

    return (
        <div className='search-bar search-bar-area'>
            <input 
                type='text'
                className='search-bar-input'
                value={searchContext.searchValue}
                placeholder={'Search what Daniel can do'}
                onChange={(e) => { 
                    if (e.currentTarget.value !== undefined) {
                        searchContext.setSearchValue(e.currentTarget.value)
    
                        if (e.currentTarget.value) {
                            searchContext.setShowSuggestions(true)
                        } else {
                            searchContext.setShowSuggestions(false)
                        }
                    }
                }}
             />
        </div>
    )
}