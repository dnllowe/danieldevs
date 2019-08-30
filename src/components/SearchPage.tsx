import React from 'react'
import { Router } from '@reach/router'
import SearchResults from './SearchResults'
import Page from './Page'
import '../styles/SearchBar.scss'
import SearchHeaderLarge from './SearchHeaderLarge'
import SearchHeaderMedium from './SearchHeaderMedium'

export default () => {


    return (
        <div>
            <Router>
                <SearchHeaderLarge path='/' />
                <SearchHeaderMedium path='/search' />
                
                <Page path='/:page-url' />
                <Page path='/dotalign/:page-url' />
            </Router>
            <Router>
                <SearchResults path='/search' />
            </Router>
        </div>
    )
}