import { Page } from '../Page'

const DotAlignQuadParser: Page = {
    title: "DotAlign QUAD to Json Parser for REST API",
    keywords: ['dotalign', 'work experience', 'graph', 'api', 'rest', 'backend'],
    description: "Converting QUAD output into REST API friendly Json",
    technologies: ['c#', '.net'],
    projectDates: '2019',
    content: [
        {
            header: "Overview",
            content: [`In the new DotAlign Cloud API, we deal with data in QUADs. 
            QUADs relate to the Resource Description Framework (RDF) format and, at a high level,
            describe data in terms of subject (what data we're referring to), 
            predicate (what property of the data), object (the value of that property), and graph
            (who the data belongs to).
            \nBecause the full definition of an object might be spread across many disparate properties,
            we needed a way to distill it back into a complete object for client-side applications.`]
        },
        {
            header: "Building the output",
            content: [`I was able to efficiently map the QUADs to json by reading through the properties
            and appending entities and their properties to hash maps. I built the final json object
            by selecting the relevant objects from the hash map, including any objects that the entity
            only had a referenced ID for.`]
        },

    ],
    url: 'dotalign/quad-to-json-api-output',
    rank: 0
}

export default DotAlignQuadParser