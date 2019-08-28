type RelatedPage = {
    text: string
    url: string
}

type SectionImage = {
    imgUrl: string
    imgTitle: string
    imgCaption: string
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
    keywords: string[]
    description: string
    url: string
    content: PageSection[]
    rank: number
    yearsOfExperience?: number
    languages?: string[]
}

export default Page