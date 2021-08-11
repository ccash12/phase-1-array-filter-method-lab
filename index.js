function findMatching (driversArray, nameOfDriver) {
    return driversArray.filter(arrayItem => arrayItem.toLowerCase()===nameOfDriver.toLowerCase()) 
}


function fuzzyMatch(driversArray,relevantLetters) {
    const driversReturned = driversArray.filter(arrayItem => arrayItem.slice(0,relevantLetters.length)===relevantLetters)
    return driversReturned
}

function matchName(driversArray,bobbyName) {
    const matchingBobbys = driversArray.filter(arrayPairing => arrayPairing.name === bobbyName)
    return matchingBobbys
}