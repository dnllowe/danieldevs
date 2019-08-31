export const getSuggestions = (suggestions: string[], input: string) => {
    
    if (!input.length) {
        return []
    }

    input = input.toLowerCase()

    const matchList = suggestions.filter(sug => {
        if (sug.length > input.length) {
            return sug.toLowerCase().includes(input)
        } else {
            return input.includes(sug.toLowerCase())
        }
    })

    return matchList.sort().slice(0, 5)
}