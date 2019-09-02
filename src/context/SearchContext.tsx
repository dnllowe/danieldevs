import React, { useState, createContext, useMemo } from 'react'

export type SearchContext = {
    searchValue: string
    setSearchValue: (searchValue: string) => void
    showSuggestions: boolean
    setShowSuggestions: (show: boolean) => void
    loading: boolean
    setLoading: (isLoading: boolean) => void
}

export const SearchContext = createContext<SearchContext>({
    searchValue: '',
    setSearchValue: () => {},
    showSuggestions: false,
    setShowSuggestions: () => {},
    loading: true,
    setLoading: () => {}
})

const SearchContextProvider = (props: any) => {

    const [ searchValue, setSearchValue ] = useState('')
    const [ showSuggestions, setShowSuggestions ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    const searchContextProvider = useMemo<SearchContext>(() => {
        return { 
            searchValue, 
            setSearchValue: setSearchValue, 
            showSuggestions, 
            setShowSuggestions,
            loading,
            setLoading 
        } 
    }, [ 
        searchValue, 
        setSearchValue,
        showSuggestions,
        setShowSuggestions,
        loading,
        setLoading
    ])

    return <SearchContext.Provider value={searchContextProvider}{...props} />
}

export default SearchContextProvider