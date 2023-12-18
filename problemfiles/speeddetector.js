//Detecting the speed of a car above speed limit for driver points demerit and license suspension//

function carSpeed (speed) {
    const speedLimit = 70;
    const overLimit = speed - speedLimit;
    const pointsIncrement = 5;
    const pointsDeduction = Math.ceil (overLimit/pointsIncrement);


    if (speed<=speedLimit) {
        return 'Okay';
    } else if (speed>speedLimit) {
        return `Points: ${pointsDeduction}`;
    }
}

