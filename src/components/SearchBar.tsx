import React, { useContext, useState } from 'react'
import AutoSuggest from 'react-autosuggest'
import { SearchContext } from '../context/SearchContext'
import { getAllKeywords } from '../modules/search/allKeywords'
import Pages from '../pages'
import { getSuggestionValue, getSuggestions } from '../modules/search/suggestions'

const renderSuggestion = (suggestion: string) => (
    <div>
        {suggestion}
    </div>
)

const keywords = getAllKeywords(Pages)

export default () => {

    const searchContext = useContext(SearchContext)
    const [ suggestions, setSuggestions ] = useState<string[]>([])

    return (
        <AutoSuggest
            suggestions={suggestions}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(keywords, value))}
            onSuggestionsClearRequested={() => setSuggestions([])}
            inputProps={{ 
                value: searchContext.searchValue,
                placeholder: 'What would you like to know?',
                onChange: (e: React.FormEvent<HTMLInputElement>) => searchContext.setSearchValue(e.currentTarget.value),
            }}
        />
    )
}