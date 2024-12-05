import { Page } from "../Page"

const Jobly: Page = {
    title: 'Jobly',
    description: "Jobly is a service that sorts through your inbox, marking emails from recruiters for jobs you're likely to be interested in.",
    projectDates: '2021',
    url: 'side-projects/jobly',
    rank: 0,
    keywords: [
        'jobly',
        'ml',
        'ai',
    ],
    technologies: [
        'machine learning',
        'chrome extension',
        'azure functions',
        'vertex ai',
        'node',
        'typescript',
        'javascript',
    ],
    content: [
        {
            header: "Overview",
            content: [
                `Jobly is a job search application that helps users find jobs that match their skills and interests.
                The service was built with machine learning using Vertex AI and deployed as a chrome extension. It's focus at the start
                is only for software engineers and software-related roles.
                `
            ]
        },
        {
            header: "Creating the AI Models",
            content: [
                `I have hundreds of emails from recruiters. I took a sample of about 2500 emails from a 1 year window and fed them to Google's Vertex AI
                as a classification problem. The goal: assign emails as either a job-related email or not. I went through and tagged all the emails as either job-related or not
                and let Vertex train on the data. The model generated had a 99% accuracy for identifying whether jobs were email-related or not.`,

                `The second component was an additional AI model. This model would presume an email was job-related. The purpose of this model was to extract important characteristics about
                the job email. I marked common language related to salary ranges, technology stacks used, company, seniority level desired, years of experience desired, location, remote vs in-office,
                and all manner of perks. This model could then look at an email and extract these properties.`,
            ]
       },
        {
            header: "How It Works",
            content: [
                `After creating the two AI models, I created a service that can index a user's email inbox. While indexing, emails would first get saved with additional metadata
                to a databse. Then the clasification model would determine if the email was job-related or not. Any job-related emails would then get processed by the second model to extract
                details about the job listing. Finally, this information would also be saved to a database. A gmail extension would then find the emails and move them to a folder for the user
                and present a UI of emails they might be interested in. Users specify their salary expectations, preferred locations, tech stack, etc, so Jobly would know the right matches.
                I also had plans to allow Jobly to auto-resopnd to emails explaining why the user might not be interested, but did not get this far. Unfortunately, the cost of requesting data
                from Vertex AI was too expensive. The idea worked end-to-end, and could work more cost-effectively if I were to train the models myself, but I never got around to it. 
                `
            ]
        }
    ]
}

export default Jobly