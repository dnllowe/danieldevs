type RelatedPage = {
    text: string
    url: string
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

type Page = {
    title: string
    image?: SectionImage
    keywords: string[]
    description: string
    url: string
    content: PageSection[]
    rank: number
    yearsOfExperience?: number
    technologies?: string[]
}

export default Page