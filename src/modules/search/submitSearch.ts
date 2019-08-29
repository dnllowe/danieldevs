import { navigate } from "@reach/router"
import { SearchContext } from "../../context/SearchContext"

export const submitSearch = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>, searchContext: SearchContext) => {
    e.preventDefault();
    searchContext.setShowSuggestions(false);
    navigate(`/search?searchQuery=${searchContext.searchValue.replace(/\s+/g, '+')}`);
}