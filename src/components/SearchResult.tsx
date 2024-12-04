import { Link } from '@reach/router'
import { Page } from '../pages/Page'
import '../styles/SearchResult.scss'

type SearchResultProps = {
    page: Page
}
export default (props: SearchResultProps) => {
    const page = props.page
    
    return (
        <Link to={'/' + page.url} className='search-result'>
            <p className='search-result-title'>{page.title}</p>
            <p className='search-result-url'>/{page.url}</p>
            <p className='search-result-description'>{page.description}</p>
            { page.technologies && <p className='search-result-technologies'><strong>{page.technologies.sort().join(', ')}</strong></p> }
            { page.projectDates && <p className='search-result-dates'><strong>project date: {page.projectDates}</strong></p> }
        </Link>
    )
}