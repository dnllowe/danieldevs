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
        case keyMap.TAB:
            searchSuggestionContext.increaseSelection()
            break
        case keyMap.ARROW_UP:
        case keyMap.ARROW_LEFT:
        case keyMap.UP:
        case keyMap.LEFT:
            searchSuggestionContext.decreaseSelection()
            break
        default:
            break
    }
}

export default handleSearchSelectionInput