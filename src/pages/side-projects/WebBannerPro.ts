import { Page } from "../Page";

const WebBannerPro: Page = {
    title: "Web Banner Pro",
    description: "A web application that lets users create animated web banners using a drag and drop interface combined with easing between keyframes",
    projectDates: '2023',
    url: "side-projects/web-banner-pro",
    rank: 0,
    keywords: [
        'web banner pro',
        'tools',
    ],
    technologies: [
        'svelte',
        'html',
        'css',
        'scss',
        'javascript',
        'typescript',
        'node',
    ],
    content: [
        {
            header: "Overview",
            content: [
                `Web Banner Pro is a web application that lets users create animated web banners using a drag and drop interface combined with easing between keyframes.
                Users can drag simple shapes, text, or images onto a canvas, then create keyframes by changing properties of the elements. Once the keyframes are created,
                the app animates the banner using easing algorithms the user can choose to interpolate between frames. The interface allows users to easily create the animations
                and view them in real-time. Because frames are interpolated based on inputs, it's possible for the user to make chagnes on-the-fly and see the results in real-time
                without disrupting the animation. The final output, however, created either a css- or svg-based html file that would recreate the same animation as the Web Banner Pro user interface.`,
            ]
        }
    ]
}

export default WebBannerPro