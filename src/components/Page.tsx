import React, { useEffect } from 'react'
import Pages from '../pages'
import { Page, RelatedPage } from '../pages/Page'
import { getPagesByUrl } from '../modules/page/getPagesByUrl'
import { scrollToTop } from '../modules/scroll/scrollToTop'
import PageNotFound from './PageNotFound'
import { Link } from '@reach/router'

const pagesByUrl = getPagesByUrl(Pages)

const RenderRelatedPage = (relatedPage: RelatedPage) => (
    <li key={relatedPage.url}>
    {relatedPage.external && <a href={relatedPage.url} target='_blank' rel='noopener noreferrer'>{relatedPage.text}</a>}
    {!relatedPage.external && <Link to={relatedPage.url}>{relatedPage.text}</Link>}
    </li>
)

const RenderPage = (page: Page) => {

    let key = 0
    
    useEffect(() => {
        scrollToTop()
    })

    return (
        <section className='app-container page-container'>
            <h1 className='page-header'>{page.title}</h1>
            {page.image && <img src={page.image.url} className={page.image.className} />}
            {page.technologies && 
                <p className={page.projectDates ? '' : 'page-technologies'}>
                    <strong>Technologies used: </strong>
                    {page.technologies.sort().join(', ')}
                </p>
            }
            {page.projectDates && 
                <p className='page-project-dates'>
                    <strong>Project dates: </strong>
                    {page.projectDates}
                </p>
            }
            {page.content.map(c => {
                return (
                    <section key={key++}>
                        <h3 className='page-section-header'>{c.header}</h3>
                        {c.img && <img src={c.img.url} className={c.img.className} />}
                        <p className='page-section-content'>{c.content}</p>
                        { c.component && c.component(null) }
                        {c.relatedPages && 
                            <div>
                                <p className='related-pages-header'>
                                    <strong>Related pages:</strong>
                                </p>
                                <ul>
                                    {c.relatedPages.map(RenderRelatedPage)}
                                </ul>
                            </div>
                        } 
                    </section>
                )
            })}
        </section>
    )
}

export default (props: { path: string, uri?: string }) => {

    const page = props.uri && pagesByUrl[props.uri]
    const pageNotFound = props.uri && !props.uri.startsWith('/search') && !page

    return (
        <article>
            { page && RenderPage(page)}
            { pageNotFound && <PageNotFound />}
        </article>
    )
}