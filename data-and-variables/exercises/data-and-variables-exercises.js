// Declare and assign the variables below
let spaceShuttleName = 'Determination';
let speedMph = 17500;
let marsKm = 225000000;
let moonKm = 38400;
const milesKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof speedMph);
console.log(typeof marsKm);
console.log(typeof moonKm);
console.log(typeof milesKm);
// Calculate a space mission below
let marsMiles = marsKm * milesKm;
let marsHours = marsMiles / speedMph;
let marsDays = marsHours / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttleName + " will take " + marsDays + " days to reach Mars.");
;
// Calculate a trip to the moon below
let moonMiles = moonKm * milesKm;
let moonHours = moonMiles / speedMph;
let moonDays = moonHours / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttleName + " will take " + moonDays + " days to reach the Moon.");
