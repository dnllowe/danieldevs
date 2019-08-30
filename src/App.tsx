import React from 'react'
import './styles/Index.scss'

import SearchContextProvider from './context/SearchContext'
import SearchPage from './components/SearchPage'

const App: React.FC = () => {
  return (
    <SearchContextProvider>
        <SearchPage />
    </SearchContextProvider>
  )
}

export default App;
