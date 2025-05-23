export type RelatedPage = {
    text: string
    url: string
    external: boolean
}

type SectionImage = {
    url: string
    caption: string
    title?: string
    className?: string
}

type PageSection = {
    content: string[]
    header?: string
    img?: SectionImage
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