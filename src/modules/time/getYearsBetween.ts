const MILLISECONDS_IN_SECONDS = 1000
const SECONDS_IN_MINUTE = 60
const MINUTES_IN_HOUR = 60
const HOURS_IN_DAY = 24
const DAYS_IN_YEAR = 365

export const getYearsBetween = (begin: Date, end: Date) => {
    const timeBetween = end.valueOf() - begin.valueOf()
    const yearsBetween = timeBetween / (MILLISECONDS_IN_SECONDS * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR)
    
    return Math.round(yearsBetween)
}