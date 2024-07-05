// Declare and initialize the variables for exercise 1 here:
let indicatorLight = "red blinking";
let suitsOn = true;
let cabinReady = true;
let statusCrew = suitsOn && cabinReady;
let statusCode = 200;
let speedShuttle = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (indicatorLight === "green") {
   console.log("engines have started");
} else if (indicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//console.log("engines are off"); my prediction