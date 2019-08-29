import Page from '../Page'

const DotAlignQuadParser: Page = {
    title: "DotAlign QUAD to Json Parser for REST API",
    keywords: ['dotalign', 'work experience', 'graph', 'api', 'rest', 'backend'],
    description: "Converting QUAD output into REST API friendly Json",
    technologies: ['c#', '.net'],
    content: [
        {
            header: "Overview",
            content: `In the new DotAlign Cloud API, we deal with data in QUADs. 
            QUADs relate to the Resource Description Framework (RDF) format and, at a high level,
            describes data in terms of subject (what data we're referring to), 
            predicate (what property of the data), object (the value of that property), and graph
            (who the data belongs to).
            \nBecause the full definition of an object might be spread across many disparate properties,
            we needed a way to distill it back into a complete object for client-side applications.`
        },
        {
            header: "Building the output",
            content: `I create the output in several steps.
            \nCreating the distilled objects
            \nFirst, I scan the QUADs, adding every subject as an array of objects, keyed by their ID. Whenver a property matches the subject and ID, it's added to the object
            \nExpanding the references
            \nWhen one object references another (think, an email address belonging to a user), that information is stored as an ID on the QUAD.
            Using this ID, I replace the reference with the actual object using the distilled map from before. When creating the expanded
            set of objects, I use a copy of the original. This way, I maintain the original references.
            \nAdding children back to the parents
            \nParent entities typically don't have references to their children in our data model.
            However, while scanning the QUADs, I have the opportunity to place children in the parent object.
            Any time a child references a parent, the parent also adds the child to an array of that type
            \nUpdating the ORM
            \nDotAlign uses an in-house ORM to generate SQL queries for entities in graph format. 
            We rely on these queries referencing parent objects in a specific way in order to create the
            proper Json. However, we also wanted to associate objects that may have joined to the parent
            without having a specific reference. To accomplish this, I updated our ORM-generated queries
            so that they automatically add references to joined entities. Then, when the SQL output is parsed,
            it can automatically include the joined entities in the json for the parent object.
            \nFinal output
            \nWhen fetching QUADs into Json, I let the user specify which types of entities they care about. 
            I match their request to the array of objects for that type and return only the data they're interested in.`
        },

    ],
    url: 'dotalign/quad-to-json-api-output',
    rank: 0
}

export default DotAlignQuadParser