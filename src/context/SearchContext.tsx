import React, { useState, createContext, useMemo } from 'react'
import { Page } from '../pages/Page'

export type SearchContext = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
    searchResults: Page[]
    setSearchResults: (results: Page[]) => void
    showSuggestions: boolean
    setShowSuggestions: (show: boolean) => void
}

export const SearchContext = createContext<SearchContext>({
    searchValue: '',
    setSearchValue: () => {},
    searchResults: [],
    setSearchResults: () => {},
    showSuggestions: false,
    setShowSuggestions: () => {}
})

const SearchContextProvider = (props: any) => {

    const [ searchValue, setSearchValue ] = useState('')
    const [ searchResults, setSearchResults ] = useState<Page[]>([])
    const [ showSuggestions, setShowSuggestions ] = useState(false)
    
    const setSearchValueWithLogging = (value: string) => {
        console.log("Setting search value: " + value)
        setSearchValue(value)
    }
    const searchContextProvider = useMemo<SearchContext>(() => {
        return { 
            searchValue, 
            setSearchValue: setSearchValueWithLogging, 
            searchResults, 
            setSearchResults, 
            showSuggestions, 
            setShowSuggestions 
        } 
    }, [ 
        searchValue, 
        setSearchValue,
        searchResults,
        setSearchResults,
        showSuggestions,
        setShowSuggestions
    ])

    return <SearchContext.Provider value={searchContextProvider}{...props} />
}

export default SearchContextProvider