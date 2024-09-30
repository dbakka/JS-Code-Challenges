// Speed Detector

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    }

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    if (demeritPoints > 12) {
        return "License suspended";
    }

    return `Points: ${demeritPoints}`;
}

function speedDetector() {
    const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    const result = calculateDemeritPoints(speed);
    console.log(result);
}

// Call the function to run the program
speedDetector();