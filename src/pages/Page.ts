export type RelatedPage = {
    text: string
    url: string
    external: boolean
}

type SectionImage = {
    url: string
    title?: string
    caption?: string
    className?: string
}

type PageSection = {
    header: string
    img?: SectionImage
    content: string
    relatedPages?: RelatedPage[],
    component?: (props: any) => JSX.Element
}

export type Page = {
    title: string
    image?: SectionImage
    keywords: string[]
    description: string
    url: string
    content: PageSection[]
    rank: number
    projectDates?: string
    technologies?: string[]
}