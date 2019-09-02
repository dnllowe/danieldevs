import React, { useEffect } from 'react'
import Pages from '../pages'
import { Page, RelatedPage } from '../pages/Page'
import { getPagesByUrl } from '../modules/page/getPagesByUrl'
import { scrollToTop } from '../modules/scroll/scrollToTop'
import PageNotFound from './PageNotFound'
import { Link } from '@reach/router'

const pagesByUrl = getPagesByUrl(Pages)

const RelatedPageView = (props: { relatedPage: RelatedPage }) => (
    <li key={props.relatedPage.url}>
    {props.relatedPage.external && <a href={props.relatedPage.url} target='_blank' rel='noopener noreferrer'>{props.relatedPage.text}</a>}
    {!props.relatedPage.external && <Link to={props.relatedPage.url}>{props.relatedPage.text}</Link>}
    </li>
)

const Image = (props: { className?: string, url: string, caption: string }) => (
    <div>
        <img src={props.url} alt={props.caption} className={props.className} />
    </div>
)

const PageView = (props: { page: Page }) => {

    let key = 0
    const { page } = props

    useEffect(() => {
        scrollToTop()
    })

    return (
        <section className='app-container page-container'>
            <h1 className='page-header'>{page.title}</h1>
            {page.image && <Image {...page.image} /> }
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
                        {c.header && <h3 className='page-section-header'>{c.header}</h3>}
                        {c.img && <Image {...c.img} />}
                        <p className='page-section-content'>{c.content}</p>
                        { c.component && c.component(null) }
                        {c.relatedPages && 
                            <div className='related-pages-container'>
                                <p className='related-pages-header'>
                                    <strong>Related pages:</strong>
                                </p>
                                <ul>
                                    {c.relatedPages.map(rp => <RelatedPageView relatedPage={rp} />)}
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
            { page && <PageView page={page} />}
            { pageNotFound && <PageNotFound />}
        </article>
    )
}