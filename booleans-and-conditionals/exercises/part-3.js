let indicatorLight = 'red blinking';
let fuel = 21000;
let temperature = 1200;

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

if (fuel > 20000 && temperature <= 2500) {
   console.log("Full tank. Engines good."); 

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

} else if (fuel > 10000 && temperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

} else if (fuel > 5000 && temperature <= 2500) {
    console.log("Fuel level above 25%. Engines good."); 

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

} else if (fuel <= 5000 || temperature > 2500) {
    console.log("Check fuel level. Engines running hot."); 

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

} else if (fuel < 1000 || temperature > 3500 || indicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT"); 

f) Otherwise, print "Fuel and engine status pending..." */

if (fuel > 20000 && temperature <= 2500) {
    console.log("Full tank. Engines good."); 
} else if (fuel > 10000 && temperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
} else if (fuel > 5000 && temperature <= 2500) {
    console.log("Fuel level above 25%. Engines good."); 
} else if (fuel <= 5000 || temperature > 2500) {
    console.log("Check fuel level. Engines running hot."); 
} else if (fuel < 1000 || temperature > 3500 || indicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT"); 
} else {
    console.log("Fuel and engine status pending...");
}


// Code 5a - 5f here:

if (fuel < 1000 || temperature > 3500 || indicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuel <= 5000 || temperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
  } else if (fuel > 20000 && temperature <= 2500) {
    console.log("Full tank. Engines good.");
  } else if (fuel > 10000 && temperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuel > 5000 && temperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let override = false
/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */
if (fuel > 20000 && indicatorLight === "red blinking" || override) { 
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}
