import React, { useState, createContext, useMemo } from 'react'

type SearchContext = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
}

export const SearchContext = createContext<SearchContext>({
    searchValue: '',
    setSearchValue: () => {},
})

const SearchContextProvider = (props: any) => {

    const [ searchValue, setSearchValue ] = useState('')

    const searchContextProvider = useMemo<SearchContext>(() => {
        return { searchValue, setSearchValue } 
    }, [ 
        searchValue, 
        setSearchValue
    ])

    return <SearchContext.Provider value={searchContextProvider}{...props} />
}

export default SearchContextProvider