import { Page } from "../Page";

const MoodBoard: Page = {
    title: "Mood Board",
    description: "A desktop application to quickly drag and drop images onto a canvas.",
    projectDates: '2023',
    url: "side-projects/mood-board",
    rank: 0,
    keywords: [
        'mood board',
        'tools',
    ],
    technologies: [
        'svelte',
        'html',
        'css',
        'scss',
        'javascript',
        'typescript',
    ],
    content: [
        {
            header: "Overview",
            content: [
                `Mood Board is a desktop application that allows users to quickly drag and drop images onto a canvas.
                Partly inspired by the Arc Browser and the infinitely scrolling canvases of apps like Figma, I wanted to simple desktop (not web / user-authenticated) application
                that would allow me to quickly save images to use as reference while creating games. The idea was to use Tauri or Electron (probably Tauri for its improved performance and smaller memory footprint)
                to create a cross-platform application out of the web-based Svelte frontend and save mood boards locally onto the user's machine.`,
            ]
        }
    ]
}

export default MoodBoard