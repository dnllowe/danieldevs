import React from 'react'
import Page from '../pages/Page'

type SearchResultProps = {
    page: Page
}
export default (props: SearchResultProps) => {
    const page = props.page

    return (
        <div>
            <p>{page.title}</p>
            <p>{page.url}</p>
            <p>{page.description}</p>
        </div>
    )
}