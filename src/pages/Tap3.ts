import { Page } from './Page'
import Tap3Video from '../components/Tap3Video'

const Tap3: Page = {
    title: 'Tap 3 iOS and Android Mobile Game',
    description: 'Tap 3 was my first launched software application: a mobile, reflexed-based game for iOS and Android.',
    keywords: [ 'android', 'ios', 'projects', 'mobile', 'cocos2d', 'game development', 'tap 3' ],
    url: 'tap3-ios-android-mobile-game',
    rank: 0,
    projectDates: '2016',
    image: {
        url: '/tap3-logo.jpg',
        caption: 'Tap 3 tiles logo -- iOS and Android mobile game',
        className: 'tap3-logo'
    },
    technologies: [ 'c++', 'cocos2d', 'gimp', 'photoshop' ],
    content: [
        {
            header: 'Overview',
            content: `I built Tap 3 using C++ and the Cocos2d game engine. Cocos handled things like
            scene management and rendering images, and I built all the game logic. Before each round,
            the game generates 3-6 possible matches (depending on the current difficulty) and the player
            has a certain amount of time to identify the matches. Matches can be for shapes, colors, or style. 
            I use the round number as an input that drives the difficulty of matches, color and shape distribution, and the pattern of shapes.`,
            img: {
                url: '/tap3.png',
                caption: 'Tap 3 tiles iOS and Android mobile game',
                className: 'tap3-img'
            },
            relatedPages: [
                {
                    url: 'https://apps.apple.com/us/app/tap-3-tiles/id1129999627',
                    text: 'Tap 3 iOS app',
                    external: true
                },
                {
                    url: 'https://play.google.com/store/apps/details?id=com.OutOfOrbitGames.Tap3&hl=en_US',
                    text: 'Tap 3 Android app',
                    external: true
                }
            ]
        },
        {
            header: 'Multiple Screen Sizes',
            content: `I created a helper class to help manage assets for multiple screen sizes. It detects
            the player's device width at startup and selects assets that fit into the correct range for that screen size.
            For the most part, creating multiple-sized assets was a simple process of starting with the highest
            resolution and scaling down from there.`
        },
        {
            header: 'Game Trailer',
            content: 'Check out the video for a better idea of how the game plays:',
            component: Tap3Video
        }
    ]
}

export default Tap3