import { Page } from "../Page";

const Maia: Page = {
    title: "Maia",
    description: "Maia is a no-code platform for training, deploying, and sharing AI / ML models",
    projectDates: '2020-2021',
    url: "side-projects/maia",
    rank: 0,
    keywords: [
        "maia",
        "ml",
        "ai",
        "no code",
        "platform",
    ],
    technologies: [
        "python",
        "vaex",
        "dask",
        "pandas",
        "kubernetes",
        "google cloud run",
        "azure functions",
        "flask",
        "react", 
        "typescript",
        "javascript",
        "node",
        "postgresql",
        "docker",
        "kubernetes",
        "server sent events",
        "web workers",
        "apache airflow",
    ],
    content: [
        {
            header: "Overview",
            content: `Maia is a no-code platform for training, deploying, and sharing AI / ML models.
            Although a straightforward premise, Maia is perhaps my most ambitious project. But at a high level,
            the idea was to allow anyone to create an AI model using their own data or data shared with them
            to predict outcomes on similar data. Users could simply upload a csv of data, and Maia would process it
            and train models to predict desired fields. All of the functionality was presented as a graphical user interface
            for the user and didn't require any knowledge of python, machine learning, or programming.` 
        },
        {
            header: "Importing Data",
            content: `Users could import data in a variety of ways from the frontend. Regardless of the source,
            Maia would analyze the data, create a schema for the fields and data types, and allow users to select
            which fields they wanted to import into Maia. Later, users could even append more data by uploading
            new entries of either the same schema or provide a property to join on.
            
            \n
            1) Raw text input

            \n
            Users could input raw json or csv data directly into a text field. This was the simpleset way to import data
            if users just wanted to test functionality or didnn't have a large dataset to import.

            \n
            2) Uploading a file

            \n
            Users could upload a file from their local machine. Files sizes of up to 1TB were supported. To support such
            large files, I made use of web workers to maximize the performance for the task. An initial web worker would
            begin reading data from the file. After it was done, a second work would parse the data to analyze the fields and schema of the data.
            A third web worker would then upload the chunk to a database. By the time any one worker was completed with its task, the next one was ready
            to provide it with the next chunk of data. With this method, even a terabyte of data could be processed and uploaded in its entirety in around an hour.
            
            \n
            3) API

            \n
            Finally, users could import data from a web API. Users provided a URL, paging parameters, and how many pages to fetch. Maia could then
            fetch data from the API one page at a time, processing and uploading the data. This would be convenient for users who had APIs they could
            use to import data data or knew of public APIs that they wanted to gather data from.

            \n
            Although perhaps a typical use case, I did not implement the ability to import directlyh from another database. As a matter of scope, I
            decided to leave this out of the application until it became a requested feature from users.
            `
        },
        {
            header: "Processing Data",
            content: `With the data uploaded to Maia's backend and a schema provided during import, I could now run basic analytics on the data for the user.
            Any ml-related functionality took place in a dockerized python environment using vaex, a pandas-liked library for data science with an emphasis on performance.
            Data was stored in S3 and was imported into the python environment. Depending on the size of the data, my backend would choose either a Google Cloud Run instance
            to execute the analysis, or a Google Kubernetes Engine instance (dynamically specifying the amount of CPU and memory needed).

            \n
            After having the required CPU and, most importantly, memory to process the data, I then used vaex to calculate statistics, such as mean, median, mode, min, max, etc
            for all fields. These statistics were saved so they didn't have to be recalculated, and allowed users to quickly get an idea about their data after importing it.

            \n
            I explored many options for processing large amounts of data, including dask, AWS Fargate, and Apache Airflow.
            However, the most effective solution after much experimentation was GKE.
            `
        },
        {
            header: "Training Models",
            content: `At a high level, Maia exposed the types of training algorithms and parameters available from a pandas-like API to the user as a GUI.
            With simplified language, users could choose to train a models for classification or predicting values. From the frontend, they would simply select the field
            to predict and the type of model to train and, much like the data processing service, Maia woudl spin up a mode training service based on the workload and perform the task.
            The backend would fetch the necessary data from S3, join and transform fields as specific by the user on the frontend using vaex, then train the models, calculate the accuracy,
            and surface the results on the frontend.`
        },
        {
            header: "User Experience - Parallel Processing and Server Sent Events",
            content: `Because each process relied on severless, on-demand compute, users could upload as many separate sets of data and train as many models as they wanted in parallel.
            Each task would simply spin up a new service in Maia's Google Cloud-based backend. To let users know when tasks were finished, I used server sent events. Each task would
            be linked to a user ID and have its own ID. A node-based Notification Service would hold user subscriptions to server sent events. Then any ml-related service could send messages to the
            service with the user ID, task ID, and message containing details on the status of the task. Even if the user closed their tab or browser and opened it back up, they would re-subscribe to these
            events and still receive updates on their tasks.`
        },
        {
            header: "Sharing Data and Models",
            content: `Users were able to specify access on their data and models to any other user in the platform.
            Users could grant read-only access (to see data or models, but not use them) or full access to use the data to train their own models, or models to predict outcomes.
            Permissions could be granted on a user-level or organization-level. Even with organization-wide permissions, users could still provide granular user-level permissions that would override the organization-wide access.`
        },
        {
            header: "Creating APIs",
            content: `After users finished training their models, they could create an API endpoint to use to make predictions from outside the scope of the frontend application.
            These endpoints could also be private or shared with other users and organizations. The idea was to create a platform where users could fluidly upload data, share it, and
            let others create their own models and APIs if they wanted. Sharing would have one major incentive...`
        },
        {
            header: "AI Marketplace",
            content: `Maia would tracked used compute for all tasks. It would use the time, cpu, and memory use to bill customers on a per second rate. However, the platform would also track
            when users were consuming compute using another users shared resources. If this were the case, the billing system would attribute a portion of the revenue received from charging the user to the
            owner of the data or model. So, upload a highly valuable dataset, and any time someone uses it to train models, the author of that data would get paid. Same for APIs backed by models created by other users.
            While the idea for Maia started out as a way to democratize AI for non-technical users, the marketplace and potential to earn money on the platform felt like the real "big idea" behind the platform.`
        },
        {
            header: "ChatGPT and Lessons Learned",
            content: `I thought Maia was an incredible idea with a lot of potential. I loved allowing users to create full-blown, deployed machine learning models and APIs
            at the click of a button. Maybe 12 clicks max. But I believe there was a critical flaw in my deliverable to users. I wanted to provide them with a tool to build their own
            AI using their own data. But I believe the average, non-technical users isn't interested in creating their own AI. AI is a middleman to the real goal: instantaneous answers to anything.
            I was "giving" users the gift of taking the time to create their own AI that might provide instantaneous answers after quite a bit of setup. It was easy relative to doing it themselves. But not easier than say... Chat GPT.
            Once Chat GPT launched, I realized that the level of abstraction that users want from AI was far simpler than creating a GUI for the process of creating an AI. The correct level of abstraction is a 
            human-centric way to provide input to an already-trained model. Chat GPT is a great general example. But other AI services I saw that took off all provided users with specific models for specific problems. Generalizing
            the problem and spreading the workload was not the answer (even with monetary incentives). The real answer was to cut to the chase and find the best way to deliver answer to users.`
        }
    ]
}

export default Maia