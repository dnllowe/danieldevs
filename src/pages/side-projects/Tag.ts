import { Page } from "../Page";

const Tag: Page = {
    title: "Tag",
    description: "A desktop application to quickly drag and drop images onto a canvas.",
    projectDates: '2023',
    url: "side-projects/tag",
    rank: 0,
    keywords: [
        'tag',
        'tools',
        'bookmarks',
    ],
    technologies: [
        'svelte',
        'html',
        'css',
        'scss',
        'javascript',
        'typescript',
        'node',
        'chrome extension',
    ],
    content: [
        {
            header: "Overview",
            content: `I have 1000s of bookmarks. I know because when I used Tag to import them into the app, I got a count. In my defense, I have been bookmarking pages for close
            to 25 years. I come across a page that's useful, and I think: "I'll save this for later!" Sometimes "later" never comes, sometimes it does, but at that point I usually
            can get by just re-Googling the topic or typing the first few letters of a half-remembered URL into the search bar and getting an auto-complete result. Perhaps the
            bookmark count is unforgivable. A personal problem. But regardless, it exists for me, and I wanted a more elegant solution.

            Enter Tag. Tag is a Chrome extension I built that lets me organize content by, you guessed it, tags. The novel difference here is that content could--and I would argue should--have
            multiple tags. Come across a great article on a way to implement some gameplay in Unity? Does that go under your C# folder or Unity folder? Probably Unity. But if you get enough
            scenarios like this, it becomes hard to keep track of what should go where. With Tag, I don't have to decide. I tag the article as "C#", "Unity", "Game Development", "Pathfinding", and whatever else I want.
            Then, when I want to find it again, I can search all my tagged items by keyword. Perhaps just a glorified system for placing a bookmark in multiple folders (oddly not allowed by Chrome and other browsers), but it
            works.
            `
        },
        {
            header: "Implementation",
            content: `Tag is created as a Svelte app with a node backend persisting data to a Mongo DB database. The app is deployed as a Chrome extension, which surprisingly works by simply dumping
            the output of the Svelte build process as the extension's files (plus some manifest configuration if I remember correctly). I use things like fuzzy-search libraries on the frontend to help
            populate results and everything else is basic CRUD operations.`
        },
        {
            header: "Moving On",
            content: `Ultimately, I got Tag to an working state and dog-fooded it for a while. However, after realizing that Chrome extensions don't work on mobile,
            it seemed like an uphill battle to truly adopt the app into my life. Meaning it would be that much less likely for other users to adopt.
            It works great as a desktop Chrome extension, and could even work as a standalone app on mobile, but it would lose a great deal of UX in the process.`
        }
    ]
}

export default Tag