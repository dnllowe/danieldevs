import { Page } from './Page'
import OnlinePortfolio from '../components/Portfolio'

const Portfolio: Page = {
    title: 'My Online Portfolio',
    description: 'Check out my online portfolio to get a sense of my skills and experiences',
    keywords: ['portfolio', 'resume', 'projects', 'skills'],
    url: 'online-portfolio',
    rank: 0,
    projectDates: '2019',
    content: [{
        header: '',
        content: '',
        component: OnlinePortfolio
    }],
}

export default Portfolio