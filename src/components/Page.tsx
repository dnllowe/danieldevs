import React from 'react'
import Pages from '../pages'
import Page from '../pages/Page'
import { getPagesByUrl } from '../modules/page/getPagesByUrl'

const pagesByUrl = getPagesByUrl(Pages)

const RenderPage = (page: Page) => (
    <div>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <p>{page.content}</p>
    </div>
)

export default (props: { path: string, uri?: string }) => {
    return (
        <div>
            { props.uri && RenderPage(pagesByUrl[props.uri])}
        </div>
    )
}