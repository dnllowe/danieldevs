import { SearchSuggestionsContext } from "../../context/SearchSuggestionsContext"
import { keyMap } from './keys'

const handleSearchSelectionInput = (
    event: React.KeyboardEvent<HTMLFormElement>, 
    searchSuggestionContext: SearchSuggestionsContext) => {

    switch (event.key) {
        case keyMap.ARROW_DOWN:
        case keyMap.ARROW_RIGHT:
        case keyMap.DOWN:
        case keyMap.RIGHT:
            console.log("Selection down")
            searchSuggestionContext.increaseSelection()
            break
        case keyMap.ARROW_UP:
        case keyMap.ARROW_LEFT:
        case keyMap.UP:
        case keyMap.LEFT:
            console.log("Selection up")
            searchSuggestionContext.decreaseSelection()
            break
        default:
            break
    }
}

export default handleSearchSelectionInput