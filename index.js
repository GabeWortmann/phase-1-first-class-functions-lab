function returnFirstTwoDrivers(arrayOfDrivers) {
    return [arrayOfDrivers[0], arrayOfDrivers[1]]
}

function returnLastTwoDrivers(arrayOfDrivers) {
    return [arrayOfDrivers[arrayOfDrivers.length-2], arrayOfDrivers[arrayOfDrivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(val) {
    return function(val){
        return val*5
    }
}

function fareDoubler(val){
    return val*2
}

function fareTripler(val){
    return val*3
}

function selectDifferentDrivers(arrayOfDrivers, function1){
    return function1(arrayOfDrivers) 
}
