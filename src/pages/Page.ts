type SectionImage = {
    imgUrl: string
    imgTitle: string
    imgCaption: string
}

type PageSection = {
    header: string
    img?: SectionImage
    content: string
}

type Page = {
    title: string
    keywords: string[]
    description: string
    url: string
    content: PageSection[]
    rank: number
}

export default Page