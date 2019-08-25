import React, { useContext, useState } from 'react'
import AutoSuggest from 'react-autosuggest'
import { SearchContext } from '../context/SearchContext'
import keywords from '../modules/search/allKeywords'

const getSuggestions = (searchPhrase: string) => {
    
    const matchList = keywords.filter(kw => {
        if (kw.length > searchPhrase.length) {
            return kw.includes(searchPhrase)
        } else {
            return searchPhrase.includes(kw)
        }
    })

    return matchList.sort().slice(0, 5)
}

const getSuggestionValue = (suggestion: string) => suggestion

const renderSuggestion = (suggestion: string) => (
    <div>
        {suggestion}
    </div>
)

export default () => {

    const searchContext = useContext(SearchContext)
    const [ suggestions, setSuggestions ] = useState<string[]>([])

    return (
        <AutoSuggest
            suggestions={suggestions}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
            onSuggestionsClearRequested={() => setSuggestions([])}
            inputProps={{ 
                value: searchContext.searchValue,
                onChange: (e: React.FormEvent<HTMLInputElement>) => searchContext.setSearchValue(e.currentTarget.value),
            }}
        />
    )
}