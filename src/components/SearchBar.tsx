import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

export default () => {

    const searchContext = useContext(SearchContext)
    console.log(searchContext.searchValue)
    
    return (
        <input
            value={searchContext.searchValue}
            onChange={e => searchContext.setSearchValue(e.currentTarget.value)}
        />
    )
}