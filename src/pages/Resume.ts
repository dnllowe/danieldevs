import Page from './Page'
import ResumeView from '../components/Resume'

const Resume: Page = {
    title: 'Resume',
    description: 'The traditional resume for my most recent work experience and software projects.',
    keywords: ['resume', 'work experience', 'projects', 'skills'],
    url: 'resume',
    rank: 0,
    content: [{
        header: '',
        content: 'The traditional resume for my most recent work experience and software projects.',
        component: ResumeView
    }]
}

export default Resume