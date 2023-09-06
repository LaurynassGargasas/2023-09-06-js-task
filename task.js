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
    let weeks = Math.floor(days / 7)
    let remainingdays = days % 7
    let output = `${days} dienos yra ${weeks} savaitės ir ${remainingdays} diena.`

    return output
}

console.log(daysToWeeks(18))


function daysToYears(days) {
    let years = Math.floor(days / 365)
    let remainingdays = days % 365
    let output = `${days} dienos yra ${years} metai ir ${remainingdays} dienos.`
    return output
}

console.log(daysToYears(390))


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


function daysToFormat (days, format) {
    let output = ''

    if (format === 'minutes') {
        let minutes = days * 24 * 60
        output = `${days} days - ${minutes} minutes.`
        return output
    }

    if (format === 'hours') {
        let hours = days * 24
        output = `${days} days - ${hours} hours.`
        return output
    }

    if (format === 'weeks'){
        let weeks = (days / 7).toFixed(2)
        output = `${days} days - ${weeks} weeks.`
        return output
    }

    if (format === 'months') {
        let months = (days / 30).toFixed(2)
        output = `${days} days - ${months} months.`
        return output
    }

    if (format === 'years') {
        let years = (days / 365).toFixed(2)
        output = `${days} days - ${years} years.`
        return output
    }
}

console.log(daysToFormat(14, 'years'))




function isDividable(divisor, unit) {

    let remains = divisor % unit
    let output = ''

    if (remains === 0){
        output = `${divisor} dalinasi iš ${unit}.`
        return output
    }

    if (remains !== 0) {
        output = `${divisor} nesidalina iš ${unit}, liekana yra ${remains}.`
        return output
    }
}

console.log(isDividable(8, 3))




function isPair(word){

    let remain = word.length % 2
    let output = ''

    if(remain === 0){
        output = `Porinis raidziu skaicius`
        return output
    }

    if(remain !== 0){
        output = `Neporinis raidziu skaicius`
        return output
    }
}

console.log(isPair('lala'))



function whichSymbol(text, whichOne) {
    let number = whichOne - 1
    let theLeter = text[number]

    let output = `Teksto "${text}" ${whichOne} raidė yra "${theLeter}".`

    if (number > text.length){
        output = `Tekstas "${text}" turi ${text.length} simbolius, o jūs nurodėte grąžinti ${whichOne}.`
        return output
    } else if (number < 0){
        number = whichOne + 1
        theLeter = text[text.length + number]
        output = `Teksto "${text}" ${whichOne} raidė yra "${theLeter}".`
        return output
    } else {
        return output
    }
}

console.log(whichSymbol('labass', -2))