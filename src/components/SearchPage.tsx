import { Router } from '@reach/router'
import SearchResults from './SearchResults'
import Page from './Page'
import '../styles/SearchBar.scss'
import SearchHeaderLarge from './SearchHeaderLarge'
import SearchHeaderMedium from './SearchHeaderMedium'

export default () => (
    <div>
        <Router>
            <SearchHeaderLarge path='/' />
            <Page path='/:page-url' />
            <Page path='/bloomberg/:page-url' />
            <Page path='/dotalign/:page-url' />
            <Page path='/entergrip/:page-url' />
        </Router>
        <Router>
            <SearchHeaderMedium path='/:page-url' />
            <SearchHeaderMedium path='/bloomberg/:page-url' />
            <SearchHeaderMedium path='/dotalign/:page-url' />
            <SearchHeaderMedium path='/entergrip/:page-url' />
        </Router>
        <Router>
            <SearchResults path='/search' />
        </Router>
    </div>
)