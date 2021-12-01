const returnFirstTwoDrivers = function(drivers){
    return Array(drivers[0], drivers[1]);
};

const returnLastTwoDrivers = function(drivers){
    return Array(drivers[2], drivers[3]);
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(integer){
    return function(fare){
        return createFareMultiplier = integer * fare
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers)
};

