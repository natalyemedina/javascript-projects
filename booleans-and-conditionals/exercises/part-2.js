let indicatorLight = "red blinking";
let suitsOn = true;
let cabinReady = true;
let statusCrew = suitsOn && cabinReady;
let statusCode = 200;
let speed = 15000;

// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (statusCrew) {
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (statusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (statusCode === 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline!");
}

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (speed > 17500) {
    console.log("ALERT: Escape velocity reached!");
} else if (speed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable speed.");
}

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?

console.log(/* "Yes" or "No" */);

console.log("Yes");
