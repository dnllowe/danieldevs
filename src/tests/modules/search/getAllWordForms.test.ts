import { getAllWordForms } from '../../../modules/search/getAllWordForms'

it('get all common word forms for a word', () => {
    const actual = getAllWordForms('test')

    expect(actual).toContain('test')
    expect(actual).toContain('tests')
    expect(actual).toContain('tester')
    expect(actual).toContain('testers')
    expect(actual).toContain('testing')
    expect(actual).toContain('testings')

})