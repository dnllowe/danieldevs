
import { Page } from '../Page'

const Godot: Page = {
    title: 'Godot contribution: Real-time Animation Preview',
    description: "I added a feature that allows users to preview their animations in real-time",
    projectDates: '2024',
    rank: 0,
    url: 'open-source/godot',
    keywords: [
        'godot',
        'open source',
        'game development',
        'github',
    ],
    technologies: ['c++', 'godot'],
    content: [
        {
            header: "Real-time Animation Preview",
            content: `Godot gives developers the ability to author animations based on properties and keyframes. However, the UX wasn't great.
            You were not able to see the effects of the change in real-time. Instead, developers had to play the animation to see its effect.
            This is quite tedious if you're trying to adjust animation keyframes based on other keyframes at once before previewing during actual play.
            Because Godot is open source, I found a way to add this feature and submitted a PR. After some feedback and suggestions, it was merged into the engine.`,
            relatedPages: [
                {
                    text: "Godot Pull Request",
                    url: "https://github.com/godotengine/godot/pull/91599",
                    external: true,
                },
                {
                    text: "Impact on users",
                    url: "https://www.reddit.com/r/godot/comments/1f5me1k/my_first_contribution_to_the_engine_realtime/",
                    external: true,
                }
            ]
        },
    ],
}

export default Godot