import React from 'react'

const Portfolio = (props: {path: string }) => {
    return (
        <div>
            <h1>You're Looking At It.</h1>
            <p>I intentionally modeled this site after Google as my online portfolio.
                Every developer needs an attention-grabbing portfolio, and I figure, why not
                showcase some engineering skills while also making the portfolio tailored to whatever
                the viewer is looking. I get asked a variety of questions about my skills and work,
                and I felt this was the best way to have that dialogue when I'm not there :)
            </p>
            <h2>Using the Search</h2>
            <p>We all know how to Google. So get started and learn about what I do!</p>
        </div>
    )
}

export default Portfolio