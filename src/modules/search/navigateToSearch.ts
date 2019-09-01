import { navigate } from "@reach/router"

export default (search: string) => navigate(`/search?searchQuery=${search.replace(/\s+/g, '+')}`)