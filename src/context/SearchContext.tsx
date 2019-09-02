import React, { useState, createContext, useMemo } from 'react'
import { Page } from '../pages/Page'

export type SearchContext = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
    searchResults: Page[]
    setSearchResults: (results: Page[]) => void
    showSuggestions: boolean
    setShowSuggestions: (show: boolean) => void
    loading: boolean
    setLoading: (isLoading: boolean) => void
}

export const SearchContext = createContext<SearchContext>({
    searchValue: '',
    setSearchValue: () => {},
    searchResults: [],
    setSearchResults: () => {},
    showSuggestions: false,
    setShowSuggestions: () => {},
    loading: false,
    setLoading: () => {}
})

const SearchContextProvider = (props: any) => {

    const [ searchValue, setSearchValue ] = useState('')
    const [ searchResults, setSearchResults ] = useState<Page[]>([])
    const [ showSuggestions, setShowSuggestions ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const searchContextProvider = useMemo<SearchContext>(() => {
        return { 
            searchValue, 
            setSearchValue: setSearchValue, 
            searchResults, 
            setSearchResults, 
            showSuggestions, 
            setShowSuggestions,
            loading,
            setLoading 
        } 
    }, [ 
        searchValue, 
        setSearchValue,
        searchResults,
        setSearchResults,
        showSuggestions,
        setShowSuggestions,
        loading,
        setLoading
    ])

    return <SearchContext.Provider value={searchContextProvider}{...props} />
}

export default SearchContextProvider