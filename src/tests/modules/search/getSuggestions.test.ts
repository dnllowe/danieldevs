import { getSuggestions } from '../../../modules/search/suggestions'

const keywords = [ 'read', 'react', 'redux', 'remedy', 'rare' ]

it('returns keywords that match input, sorted alphabetically', () => {
    
    const actual = getSuggestions(keywords, 'r')
    const expected = keywords.sort()

    expect(actual).toEqual(expected)
})

it('returns a maximum of 5 suggestions', () => {
    const moreThan5Keywords = keywords.concat(['rez', 'rex'])
    const actual = getSuggestions(moreThan5Keywords, 'r').length
    
    expect(actual).toEqual(5)
})

it('only returns matching keywords', () => {

    const actual = getSuggestions(keywords, 'rea')
    const expected = [ 'react', 'read' ]

    expect(actual).toEqual(expected)
})

it('returns keywords as long as a substring matches input', () => {

    const actual = getSuggestions(keywords, 'ed')
    const expected = [ 'redux', 'remedy' ]

    expect(actual).toEqual(expected)
})

it('ignores letter casing', () => {

    const actual = getSuggestions(keywords, 'React')
    const expected = [ 'react' ]

    expect(actual).toEqual(expected)
})