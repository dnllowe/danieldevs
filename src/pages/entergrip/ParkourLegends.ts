
import { Page } from '../Page'

const ParkourLegends: Page = {
    title: 'Parkour Legends PC Game',
    description: "A fast-paced 2d pixel-art platformer where players use real parkour moves to overcome obstacles and beat levels as quickly as possible.",
    projectDates: '2022-2024',
    keywords: [
        'parkour legends',
        'entergrip',
        'enter grip',
        'unity', 
        'c#', 
        'aseprite', 
        'steam', 
        'azure functions', 
        'mongodb', 
        'nosql',
        'pc',
        'full stack',
        'projects',
        'game development',
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
            in the replay frame data, and players can watch or race against themselves in this manner. Because the replay is deterministic, players can also watch replays in slow motion or at 2x or 3x speed.`
        },
    ],
    url: 'parkour-legends',
    rank: 0
}

export default ParkourLegends