import { Page } from '../Page'

const DotAlignMergeUsers: Page = {
    title: 'DotAlign Multi Device Multi Username Support',
    description: 'New features that handled multiple user accounts and multiple instances of DotAlign on different devices for the same user to stay in sync.',
    keywords: ['sql', 'migration', 'work experience', 'dotalign', 'backend'],
    technologies: ['sql', 'c#', '.net'],
    url: 'dotalign/multi-device-and-user-support',
    projectDates: '2017',
    content: [
        {
            header: 'Overview',
            content: `The DotAlign Outlook addin was originally implemented with an unnoticed assumption 
            that a user should be tightly coupled to their original username and device. 
            However, in practice, users change laptops and even their primary email address occasionally.
            I implemented new logic that would allow data for the same user on different devices remain in sync.
            In addition, I also added a feature that would allow a user to sync a different user account with
            their own.`
        },
        {
            header: 'Implementation for Same User Sync Across Devices',
            content: `In the Outlook addin, users already back up exports of their analyzed data 
            if they are sharing data to a team location. When users import data shared from other team members,
            we ignore the user's own data, with the assumption they already have it. However, this isn't the case
            when a user changes devices or reinstalls the app. To accommodate this use case, I created a step
            during installation that assigns a GUID to the installation of DotAlign for that user. This GUID is linked
            to their exported files. Now, when importing data, if the application notices the GUID is different,
            it will import the data, even for the same user.`
        },
        {
            header: 'Implementation for Syncing Different Users',
            content: `Syncing different user accounts required more work that syncing devices.
            There were specific SQL joins dictating how a user might analyze data. At a high level, only
            certain data "belonged" to the user, and users were originally tied to a single entity. To
            overcome this, I migrated the schema to support a many-to-many relationship between users.
            I then updated all of the SQL, mostly through JOINS, to account for more than one user
            owning data.`
        }
    ],
    rank: 0
}

export default DotAlignMergeUsers