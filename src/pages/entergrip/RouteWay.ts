import { Page } from '../Page'

const RouteWay: Page = {
    title: 'Route Way PC Game Prototype',
    description: "A prototype for a cozy management game about configuring bus routes around town",
    projectDates: '2024',
    keywords: [
        'route way',
        'entergrip',
        'enter grip',
        'unity', 
        'c#', 
        'steam', 
        'pc',
        'full stack',
        'projects',
        'game development',
        'prototypes',
        'procedural generation',
        'data oritented design',
        'burst',
        'multithreading',
        'job system',
        'DOTS',
    ],
    technologies: ['c#', 'unity', 'steam', 'burst', 'DOTS', 'data oriented design', 'multithreading', 'job system', 'procedural generation'],
    content: [
        {
            header: "Game Design",
            content: `Route Way is a prototype for a cozy management game about creating bus routes for a town.
            The idea was to provide a chill, laid back game where players could take their time optimizing how a system worked.
            It would contrast more complex games like City Skylines and, intstead of building and managing an entire city,
            would focus solely on optimizing public transportation through bus routes.`,
        },
        {
            header: "Procedural Generation",
            content: `One of the key aspects of the game was giving players an infinite sandbox to experiment in.
            To that end, I created tools and systems to procedurally generate content. There are systems for creating intersecting
            roads that travel between multiple towns, generating towns of varying density, and generating organic landmasses
            to place everything on.

            This was very satisfying to create, but in the end, the result was too complex and didn't fit with the cozy theme.
            I later stripped the procedural generation back to only generating different sized blocks to fill a set space, then
            populate them with buildings and surround them with streets and parks. This led to a more organized and "cozy" feeling grid of buildings and roads.`
        },
        {
            header: "Optimization: Data Oriented Design and Unity's Job System",
            content: `My performance target for procedural generation was to be able to generate an entire region within a second. Because I was generating dozens of roads
            and computing their intersections and generating meshes all at once, I used Unity's Job System  to parallelize some work
            and optimize code as much as possible through data oriented design (where most data was packed tightly together, contiguously in memory as structs that could be
            worked on in a way that was optimal for the CPU). What original took up to 30 seconds to generate a small patch of town was optimized to generate an entire island in under a second.
            This optimization was on the more complex procedural design. Once stripped back, the optimizations ensured I could generate entire, simple grid-based towns in milliseconds.`
        },
        {
            header: "Pathfinding",
            content: `I made use of A* pathfinding to automatically create logical preview paths when players moved the cursor around
            to plan bus routes. The entire road had structures to define weighting and nodes, so pathfinding was built ontop of this underlying system.
            I also made use of Unity's Job System and data oriented design to optimize the pathfinding tasks.`,
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
                    text: "Z Survivors Prototype",
                    url: "/entergrip/z-survivors",
                    external: false,
                },
            ]
        },
    ],
    rank: 0,
    url: 'entergrip/route-way',
}

export default RouteWay