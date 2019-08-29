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
            </Router>
            <Router>
                <SearchResults path='/search' />
                <Page path='/pages/:page-url' />
                <Page path='/pages/dotalign/:page-url' />
            </Router>
        </div>
    )
}