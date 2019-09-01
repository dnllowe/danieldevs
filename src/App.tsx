import React from 'react'
import './styles/Index.scss'

import SearchContextProvider from './context/SearchContext'
import SearchSuggestionsContextProvider from './context/SearchSuggestionsContext'
import SearchPage from './components/SearchPage'

const App: React.FC = () => {
  return (
    <SearchContextProvider>
      <SearchSuggestionsContextProvider>
        <SearchPage />
      </SearchSuggestionsContextProvider>
    </SearchContextProvider>
  )
}

export default App;
