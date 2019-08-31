import React, { useEffect } from 'react'
import Pages from '../pages'
import Page from '../pages/Page'
import { getPagesByUrl } from '../modules/page/getPagesByUrl'
import { scrollToTop } from '../modules/scroll/scrollToTop'
import PageNotFound from './PageNotFound';

const pagesByUrl = getPagesByUrl(Pages)

const RenderPage = (page: Page) => {

    let key = 0
    
    useEffect(() => {
        scrollToTop()
    })

    return (
        <section className='app-container page-container'>
            <h1 className='page-header'>{page.title}</h1>
            {page.technologies && 
                <p className='page-technologies'>
                    <strong>Technologies used: </strong>
                    {page.technologies.sort().join(', ')}
                </p>
            }
            {page.content.map(c => {
                return (
                    <section key={key++}>
                        <h3 className='page-section-header'>{c.header}</h3>
                        <p className='page-section-content'>{c.content}</p>
                        { c.component && c.component(null) }
                    </section>
                )
            })}
        </section>
    )
}

export default (props: { path: string, uri?: string }) => {

    console.log(props.uri)
    const page = props.uri && pagesByUrl[props.uri]
    const pageNotFound = props.uri && !props.uri.startsWith('/search') && !page

    return (
        <article>
            { page && RenderPage(page)}
            { pageNotFound && <PageNotFound />}
        </article>
    )
}