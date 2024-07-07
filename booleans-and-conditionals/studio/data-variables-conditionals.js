// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astroCount = 7;
let astroStatus = "ready";
let avgAstroMassKg = 80.7;
let crewKg = astroCount * avgAstroMassKg;
let fuelKg = 760000;
let shuttleKg = 74842.31;
let totalKg = crewKg + fuelKg + shuttleKg;
let maxMassLimit = 850000;
let fuelCelsius = -225;
let minFuelTemp = -300;
let maxFuelTemp = -150;
let fuel = "100%";
let weather = "clear";
let liftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astroCount <= 7) {
    console.log("Total number of astronauts within limit.");
} else {
    console.log("Total number of astronauts exceeds limit.");
}

// add logic below to verify all astronauts are ready

if (astroStatus === "ready") {
    console.log("All astronauts are ready.");
} else {
    console.log("Astronauts are not ready.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalKg < maxMassLimit) {
    console.log("Total mass in kg within max limit.");
} else {
    console.log("Total mass in kg exceeds limit.");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelCelsius >= -300 || fuelCelsius <= -150) {
    console.log("Fuel temperature is within range.");
} else {
    console.log("Fuel celsius is not within range.");
}    

// add logic below to verify the fuel level is at 100%

if (fuel === "100%") {
    console.log("Fuel level is at 100%.");
} else {
    console.log("Fuel level is not at 100%.");
}

// add logic below to verify the weather status is clear

if (weather === "clear") {
    console.log("Weather status is clear.\n");
} else {
    console.log("Weather status is not clear.");
}

// Verify shuttle launch can proceed based on above conditions

if (astroCount <= 7 &&
    astroStatus === "ready" &&
    totalKg < maxMassLimit &&
    fuelCelsius >= -300 && fuelCelsius <= -150 &&
    fuel === "100%" &&
    weather === "clear"
) {
    console.log("All systems are a go! Initializing space shuttle launch sequence.");
    console.log("-----------------------------------------------------------------");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astroCount);
    console.log("Crew Mass:", crewKg + " " + "kg");
    console.log("Fuel Mass:", fuelKg + " " + "kg");
    console.log("Shuttle Mass:", shuttleKg + " " + "kg");
    console.log("Total Mass:", totalKg + " " + "kg");
    console.log("Fuel Temperature:", fuelCelsius + " " + "C");
    console.log("Weather Status:", weather);
    console.log("-----------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} 