import React from 'react'
import { Link } from '@reach/router'
import Page from '../pages/Page'

type SearchResultProps = {
    page: Page
}
export default (props: SearchResultProps) => {
    const page = props.page

    return (
        <Link to={'/pages/' + page.url}>
            <div>
                <p>{page.title}</p>
                <p>{page.url}</p>
                <p>{page.description}</p>
            </div>
        </Link>
    )
}