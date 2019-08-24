import React, { useState, createContext, useMemo } from 'react'
import Page from '../pages/Page';

type SearchContext = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
    results: Page[]
    setResults: (pages: Page[]) => void
}

export const SearchContext = createContext<SearchContext>({
    searchValue: '',
    setSearchValue: () => {},
    results: [],
    setResults: () => {}
})

const SearchContextProvider = (props: any) => {

    const [ searchValue, setSearchValue ] = useState('')
    const [ results, setResults ] = useState<Page[]>([])

    const searchContextProvider = useMemo<SearchContext>(() => {
        return { searchValue, setSearchValue, results, setResults } 
    }, [ 
        searchValue, 
        setSearchValue,
        results,
        setResults 
    ])

    return <SearchContext.Provider value={searchContextProvider}{...props} />
}

export default SearchContextProvider