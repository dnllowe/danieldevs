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
            content: [`The DotAlign Outlook addin was originally implemented with an unnoticed assumption 
            that a user should be tightly coupled to their original username and device. 
            However, in practice, users change laptops and even their primary email address occasionally.
            I implemented new logic that would allow users to have more than one DotAlign user account.
            The change also keeps data in sync across all accounts.
            In addition, I also added a feature that would allow a user to sync a different user account with
            their own, letting different users share the same data easily.`]
        },
        {
            header: 'Implementation for Same User Sync Across Devices',
            content: [`I created backups of the users' data along with a GUID associated to their installation.
            Periodically, the application checks for data backups for each user and imports any where the username
            matches but the GUIDs differ.`]
        },
        {
            header: 'Implementation for Syncing Different Users',
            content: [`Syncing different user accounts required more work that syncing devices.
            There were specific SQL joins dictating how a user might analyze data. At a high level, only
            certain data "belonged" to the user, and users were originally tied to a single entity. To
            overcome this, I migrated the schema to support a many-to-many relationship between users.
            I then updated all of the SQL, JOINing against the new many-to-many table, to account for more than one user
            owning data.`]
        }
    ],
    rank: 0
}

export default DotAlignMergeUsers