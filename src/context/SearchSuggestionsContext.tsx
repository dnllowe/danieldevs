import { useState, createContext, useMemo } from 'react'

export type SearchSuggestionsContext = {
    suggestions: string[]
    selection: number
    setSuggestions: (suggestions: string[]) => void
    increaseSelection: () => void
    decreaseSelection: () => void
    getSelectedSuggestion: () => string
}

export const SearchSuggestionsContext = createContext<SearchSuggestionsContext>({
    suggestions: [],
    setSuggestions: () => {},
    selection: -1,
    increaseSelection: () => {},
    decreaseSelection: () => {},
    getSelectedSuggestion: () => ''
})

const SearchSuggestionsContextProvider = (props: any) => {

    const [ suggestions, setSuggestions ] = useState<string[]>([])
    const [ selection, setSelection ] = useState(-1)

    const searchSuggestionsContextProvider = useMemo<SearchSuggestionsContext>(() => {

        const increaseSelection = () => {

            if (!suggestions.length) {
                setSelection(-1)
            } else {
                let newSelection = selection + 1
                
                if (newSelection >= suggestions.length) {
                    newSelection = suggestions.length - 1
                }
    
                setSelection(newSelection)
            }
        }
    
        const decreaseSelection = () => {
    
            if (!suggestions.length) {
                setSelection(-1)
            } else {
    
                let newSelection = selection - 1
        
                if (newSelection < 0) {
                    newSelection = 0
                }
        
                setSelection(newSelection)
            }
        }
    
        const getSelectedSuggestion = () => {
            return suggestions[selection]
        }

        return {
            suggestions,
            setSuggestions,
            selection,
            increaseSelection,
            decreaseSelection,
            getSelectedSuggestion
        }
    }, [ 
            suggestions, 
            setSuggestions, 
            selection
        ])

    return <SearchSuggestionsContext.Provider value={searchSuggestionsContextProvider}{...props} />
}

export default SearchSuggestionsContextProvider