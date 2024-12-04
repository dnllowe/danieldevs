import { Page } from '../Page'

const ZSurvivors: Page = {
    title: 'Z Survivors PC Game Prototype',
    description: "A zombie survivor-like prototype with endless customization",
    projectDates: '2024',
    rank: 0,
    url: 'entergrip/z-survivors',
    keywords: [
        'z survivors',
        'entergrip',
        'pc',
        'projects',
        'game development',
        'prototypes',
    ],
    technologies: ['unity', 'c#', 'DOTS', 'burst', 'job system', 'data oriented design', 'multithreading'],
    content: [
        {
            header: "Game Design",
            content: `Z Survivors is a zombie survivor-like prototype I made in Unity.
            The central idea was to make every aspect of a weapon configurable. Bullet speed, spread,
            damage, reload time, ammo capacity, etc. All of these could be upgradable parts, but there would
            be a limit on how much players could upgrade. This would give players a choice on how to experiment
            and advance based on their playstyle, strategies, or types of enemies in various waves.`,
        },
        {
            header: "Tech",
            content: `I used DOTS and data oriented design, with Systems that operated on chunks of contiguous structs in memory for optimal performance with the multi-threaded Unity Job System.
            With this methodology, I was able to render tens of thousdands of enemies and bullets on screen at once,
            which was important to the design of the game to keep the player engaged.`,
            relatedPages: [
                {
                    text: "Parkour Legends",
                    url: "/entergrip/parkour-legends",
                    external: false,
                },
                {
                    text: "Burger Flipper Prototype",
                    url: "/entergrip/burger-flipper",
                    external: false,
                },
                {
                    text: "Route Way Prototype",
                    url: "/entergrip/route-way",
                    external: false,
                },
            ]
        }
    ],
}

export default ZSurvivors