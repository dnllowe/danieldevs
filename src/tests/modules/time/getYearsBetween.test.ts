import { getYearsBetween } from '../../../modules/time/getYearsBetween'

it('Gets the years past between two dates, rounded up', () => {
    const beginningOfyear = new Date(2000, 1, 1)
    const endOfYear = new Date(2000, 12, 31)
    
    const actual = getYearsBetween(beginningOfyear, endOfYear)

    expect(actual).toEqual(1)
})