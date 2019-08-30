import React from 'react'
import { Link } from '@reach/router'
import Page from '../pages/Page'
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
            { props.page.technologies && <p className='search-result-technologies'>{props.page.technologies.join(', ')}</p> }
        </Link>
    )
}