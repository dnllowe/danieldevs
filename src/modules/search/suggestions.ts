export const getSuggestions = (suggestions: string[], input: string) => {
    
    const matchList = suggestions.filter(sug => {
        if (sug.length > input.length) {
            return sug.includes(input)
        } else {
            return input.includes(sug)
        }
    })

    return matchList.sort().slice(0, 5)
}