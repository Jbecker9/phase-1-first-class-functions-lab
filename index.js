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

function createFareMultiplier(fareMultiplier){
    return fareMultiplier()
    };
}