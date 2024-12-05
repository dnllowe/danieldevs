import { Page } from '../Page'

const ParkourLegends: Page = {
    title: 'Parkour Legends PC Game',
    description: "A fast-paced 2d pixel-art platformer where players use real parkour moves to overcome obstacles and beat levels as quickly as possible.",
    projectDates: '2022-2024',
    url: 'entergrip/parkour-legends',
    rank: 0,
    keywords: [
        'parkour legends',
        'entergrip',
        'nosql',
        'pc',
        'projects',
        'game development',
        'tools',
        '.net',
    ],
    technologies: ['c#', 'unity', 'aseprite', 'mongodb', 'azure functions', 'steam'],
    content: [
        {
            header: "Game Design",
            content: `Parkour Legends is a twist on the traditional 2d platformer formula. Instead of fighting enemies,
            collecting coins, or avoiding spikes, the main objective in Parkour Legends is to simply beat the level as quickly as possible.
            The catch is that you must overcome obstacles, scale walls, and clear seemingly impossible gaps by performing real parkour moves
            and building up and maintaining speed and momentum.`,
            relatedPages: [
                {
                    text: "Steam Page",
                    url: "https://store.steampowered.com/app/2115130",
                    external: true,
                }
            ]
        },
        {
            header: "Depth and Player Agency",
            content: `At first glance, beating the levels is a straightforward task once players have learned the controls.
            However, getting the best times will require players to creatively mix and match their moves, always deciding on the best
            path to get from start to finish. Players always have all the moves at their disposal and are encouraged to seek out shortcuts
            and approach levels however they see fit. This freedom, combined with optional objectives and hard to reach items,
            creates a great sense of depth and challenge to the game.`,
        },
        {
            header: "Art",
            content: `Parkour Legends is painstakingly animated by hand. Each and every pixel of every animation was hand drawn by me.
            Most animations have between 10-15 frames to give the game an ultra-smooth look despite being retro in style.
            The goal was to alwasy create a sense of making the old style look as fresh and breathtaking as older games would have appeared in their original era.
            Real-time shadows that shift with the rising and setting sun, and light that can create a silhouettte effect on the player are just a few examples.
            With over 70 moves and dozens of accessories and outfits available, there are literally tens of thousands of frames of animation.
            I used Aseprite for all the pixel art.`,
        },
        {
            header: "Tech",
            content: `I built Parkour Legends using Unity and C#. Most functionality is broken up into Systems that act on the plauyer based on the player's state.
            In a way, the entire game is a large finite state machine. Some modules, such as the AI for the security guard, are smaller independent statemachines.
            All of the physics properties are custom and hand-tuned to give the game the perfect feel and sense of speed, though I rely on Unity's physics engine to detect collisions.
            
            \n
            On the backend, I use Mongo DB to store high scores and replays for each level and a web API using Azure Functions to perform CRUD operations on high scores.`
        },
        {
            header: "Replays",
            content: `There are many fascinating aspects to every game, but perhaps one of the bigger "wow" factors for both players and the technical implementation is the Replay system.
            After finish a level, the player's best run will be recorded, allowing players to rewatch their best runs, race against themselves, or watch and race against
            the best times of other players in the world. To accomplish this, all the relevant state for a run is serialized and captured in a data structure. Information like
            the player's current animation frame, position, time of day, score at that moment, and even which objects they've hit or knocked over and their positions and rotations.
            Every frame, if a value has changed, a new entry is added to an array. If no changes have occurred, no new data is recorded. This way, the data is "compressed" to only signficant moments.
            When play backa replay, a puppet-like representation of the player is simulated, taking the replay as its inputs instead of a controller. Values are lerped between entries
            in the replay frame data, and players can watch or race against themselves in this manner. Because the replay is deterministic, players can also watch replays in slow motion or at 2x or 3x speed.`,
            
        },
        {
            header: "Tools and Productivity",
            content: `To complete a full-length game as a solo dev in 18 months, you have to keep productivity high. To maximize my efforts, I created several scripts, tools, and custom Unity editors to speed up time-consuming tasks.
            
            \n
            One of the biggest automations was exporting all the frames I needed for sprite animations from Aseprite and importing them into Unity at the click of a button. For Aseprite, I wrote a script
            that would isolate each layer, name it based on a convention, and export it in the right format for Unity. Because the player consists of over 30 layers, this saves hours of time.
            Then, to import into Unity, the sprites must have certain properties about their size and bounding box set correctly before assigning sprites to the appropriate animations. I was able to configure these settings per animation and sprite
            and automate the process of importing the sprites into Unity.

            \n
            Another huge time-saver was creating tools to automatically generate a level's tilemap (the art for the level geometry) and triggers (things like grip points, crawl spaces, etc) based on a given set of tiles and the level geometry.
            So, instead of ever manually placing art or physics triggers for gameplay, I could do this at the click of a button for the art (and the physics triggers were generated near-instantly while loading the level).
            This meant I could prototype and iterate on ideas quickly and never had to stop and create or redo any aspects of the level's art of triggers due to changing designs.
            
            \n
            Other important tools included custom editors to randomly place objects and sprites along a given region of space with a configurable density,
            tools to rotate objects and set the time of day so I could adjust and fix issues with lighting and cast shadows, and a script to reparent prefab objects--a task which otherwise requires manually copying
            all scripts and behaviors from the parent to a new child.
            
            \n
            Without these tools, I would have spent countless hours, days, and weeks manually performing tasks, which would have either led to decreasing the scope for the game or adding extra months of development time.`,
            relatedPages: [
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
                {
                    text: "Z Survivors Prototype",
                    url: "/entergrip/z-survivors",
                    external: false,
                },
            ]
        },
    ],
}

export default ParkourLegends