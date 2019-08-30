import React from 'react'
import './styles/Index.scss'

import SearchContextProvider from './context/SearchContext'
import SearchPage from './components/SearchPage'

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <SearchContextProvider>
          <SearchPage />
      </SearchContextProvider>
    </div>
  )
}

export default App;
