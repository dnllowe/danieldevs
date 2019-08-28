import React, { useState, createContext, useMemo } from 'react'
import Page from '../pages/Page'

type SearchContext = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
    searchResults: Page[]
    setSearchResults: (results: Page[]) => void
}

export const SearchContext = createContext<SearchContext>({
    searchValue: '',
    setSearchValue: () => {},
    searchResults: [],
    setSearchResults: () => {}
})

const SearchContextProvider = (props: any) => {

    const [ searchValue, setSearchValue ] = useState('')
    const [ searchResults, setSearchResults ] = useState<Page[]>([])
    
    const searchContextProvider = useMemo<SearchContext>(() => {
        return { searchValue, setSearchValue, searchResults, setSearchResults } 
    }, [ 
        searchValue, 
        setSearchValue,
        searchResults,
        setSearchResults
    ])

    return <SearchContext.Provider value={searchContextProvider}{...props} />
}

export default SearchContextProvider