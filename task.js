function humanToDogYears (humanYears) {
    let dogYears = humanYears * 7
    let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai`
    return output
}

console.log(humanToDogYears(20))


function daysPerbook (booksWant) {
    let perDay = Math.floor(365 / booksWant)
    let output = `norint perskaityti ${booksWant} knygų per metus, vienai knygai perskaityti turėsi ${perDay} dienas.`
    return output
}

console.log(daysPerbook(10))


function daysToWeeks (days) {
    let weeks = days / 7
    let output = `${days} dienos yra ${weeks} savaitės.`
    return output
}

console.log(daysToWeeks(14))


function daysToYears(days) {
    let years = Math.round(days / 365)
    let output = `${days} dienos yra ${years} metai.`
    return output
}

console.log(daysToYears(365))


function yearsToHours(years) {
    let hours = years * 365 * 60
    let output = `${years} metai turi ${hours} valandos.`
    return output
}

console.log(yearsToHours(5))


function monthsToHours(months) {
    let hours = months * 30 * 24
    let output = `${months} mėnesiai turi ${hours} valandas.`
    return output
}

console.log(monthsToHours(3))

function monthsToMinutes(months) {
    let minutes = months * 30 * 24 * 60
    let output = `${months} mėnesiai turi ${minutes} minutes.`
    return output
}

console.log(monthsToMinutes(3))