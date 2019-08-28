import React from 'react'
import Pages from '../pages'
import Page from '../pages/Page'
import { getPagesByUrl } from '../modules/page/getPagesByUrl'

const pagesByUrl = getPagesByUrl(Pages)

const RenderPage = (page: Page) => {

    let key = 0

    return (
        <section>
            <h1>{page.title}</h1>
            {page.content.map(c => {
                return (
                    <section key={key++}>
                        <h3>{c.header}</h3>
                        <p>{c.content}</p>
                        { c.component && c.component(null) }
                    </section>
                )
            })}
        </section>
    )
}

export default (props: { path: string, uri?: string }) => {
    return (
        <article>
            { props.uri && RenderPage(pagesByUrl[props.uri])}
        </article>
    )
}