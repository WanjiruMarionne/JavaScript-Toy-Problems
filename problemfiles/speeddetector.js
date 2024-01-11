//Detecting the speed of a car above speed limit for driver points demerit and license suspension

function carSpeed (speed) {
    const speedLimit = 70;
    const overLimit = speed - speedLimit;
    const pointsIncrement = 5;

    //Points are given as a whole number in the next band if the speed limit is not a multiple of 5
    const pointsDeduction = Math.ceil (overLimit/pointsIncrement);

    let speedDetector;
    if (speed<=speedLimit) {
        speedDetector = 'Okay';
    } else if (speed>speedLimit) {
        speedDetector = `Demerit points: ${pointsDeduction}`;
    }
    console.log(speedDetector);
}

carSpeed(51)