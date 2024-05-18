// Code your solution in this file!
const returnFirstTwoDrivers = function(name){
    const returnFirstTwoDrivers =(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return name.slice(0, 2)
}
const returnLastTwoDrivers = function(name){
    const returnFirstTwoDrivers =(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return name.slice( -2 )
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(selectingDrivers[0](drivers)); // Output: ['Antonia', 'Nuru']
console.log(selectingDrivers[1](drivers)); // Output: ['Amari', 'Mo']
const createFareMultiplier = function(multiplier){
    return function(fare){ 
    return fare * multiplier;
}

}


// Declare a variable fareDoubler and assign a function returned by createFareMultiplier(2) to it
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareDoubler(10));

const selectDifferentDrivers = function(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
};
const driverss = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Test case 1: returns the first two drivers
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 

// Test case 2: returns the last two drivers
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));


