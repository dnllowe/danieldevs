import { Page } from '../Page'

const BurgerFlipper: Page = {
    title: 'Burger Flipper PC Game Prototype',
    description: "",
    projectDates: '2024',
    rank: 0,
    url: 'entergrip/burger-flipper',
    keywords: [
        'burger flipper',
        'entergrip',
        'pc',
        'projects',
        'game development',
        'prototypes',
    ],
    technologies: ['unreal engine', 'ue4', 'ue5', 'blueprints'],
    content: [
        {
            header: "Game Design",
            content: `Burger Flipper is a fast food management simulation prototype I made in Unreal Engine.
            The goal in the game is to successfully manage your resources as you operate a fast food restaurant.
            Players get to decide how they'll run their restaurant by deciding what equipment to buy, who to hire,
            and what menu items to offer. How well players execute determines how successful their restaurant will be and whether
            customers come back for more or pass.`,
            relatedPages: [
                {
                    text: "Steam Page",
                    url: "https://store.steampowered.com/app/3140430",
                    external: true,
                }
            ]
        },
        {
            header: "Tools and Tech",
            content: `I became very comfortable with Blueprints,
            animating with Control Rig and the animation blueprints, and controlling NPCS through the Behavior Tree plugin. What was
            most enlightening was how much Blueprints, the viusal programming language, could mimic standard C++ code. There are interfaces and delegates / actions
            that behave just how I would typically use them in a traditional C# or C++ codebase.`,
        },
        {
            header: "Engine Choice",
            content: `Though I started with Unreal Engine 5, I found that the Chaos Physics system wasn't tuned quite right for have many,
            small physics objects. In this game, I wanted every french fry or chicken nugget to react realistically to physics, so I made the choice to port to Unreal Engine 4,
            which employs the Havok physics engine. Physics behavior improved drastically and performance got a boost.
            
            \n
            Although more familiar with Unity at the time, I also chose Unreal in general because it has more built-in tools and systems
            to prototype this type of game more rapidly. Animation tools, the Behavior Tree Plugin, and Blueprints with a lot of ready-made helper functions to name a few.`,
            relatedPages: [
                {
                    text: "Parkour Legends",
                    url: "/entergrip/parkour-legends",
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
        }
    ]
}

export default BurgerFlipper
