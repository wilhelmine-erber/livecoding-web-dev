// SWITCH CASE

// check what month do we have? 
// January = 1
// February = 2
// March = 3
// ... 12 cases... 

const month = 13;
// what month is this? Print it to the console as a word! 
if (month === 1) {
    console.log("Its January!");
} else if (month === 2) {
    console.log("Its February");
} else if (month === 3) {
    console.log("Its March");
} else if (month === 4) {
    console.log("Its April");
} else if (month === 5) {
    console.log("Its May");
} else if (month === 6) {
    console.log("Its June");
} else if (month === 7) {
    console.log("Its July");
} else if (month === 8) {
    console.log("Its August");
} else if (month === 9) {
    console.log("Its September");
} else if (month === 10) {
    console.log("Its October");
} else if (month === 11) {
    console.log("Its November");
} else if (month === 12) {
    console.log("Its December");
} else {
    console.log("Error cases!!!"); // 13
}
// ...
// too much to code
// how can we make it simpler? 

// a different approach
// SWITCH CASE 
// for easy comparisons 
// check for EQUALITY
// cannot check for bigger than // smaller than 

switch (month) {
    case 1:
        console.log("Its January!");
        break; // MUST HAVE FOR ALL THE CASES NORMALLY 
    case 2:
        console.log("Its February");
        break;
    case 3:
        console.log("Its March");
        break;
    case 4:
        console.log("Its April");
        break;
    case 5:
        console.log("Its May");
        break;
    case 6:
        console.log("Its June!");
        break;
    case 7:
        console.log("Its July");
        break;
    case 8:
        console.log("Its August");
        break;
    case 9:
        console.log("Its September");
        break;
    case 10:
        console.log("Its October");
        break;
    case 11:
        console.log("Its November");
        break;
    case 12:
        console.log("Its December");
        break;
    default: // standard case, backup, it MUST be there, should be at the end! 
        console.log("Its an error case! Something went wrong"); // 13  
        // doesn't need a break because its the last one!  
}

const myMonth = "January";
switch (myMonth) { // one expression only, one condition only 
    case "January": // logical OR 
    case "February":
        if (myMonth === "January") { 
            // block scope
            const message = "Hello winter!";
            console.log(message);
        }
        // console.log(message); not available outside
        console.log("This is the first or second month of the year");
        break;
    case "March":
        console.log("This is the third month of the year");
        break;
    case "April":
        console.log("This is the fourth month of the year");
        break;
    case "May":
        console.log("This is the fifth month of the year");
        break;
    case "June":
        console.log("This is the sixth month of the year");
        break;
    case "July":
        console.log("This is the seventh month of the year");
        break;
    case "August":
        console.log("This is the eigthth month of the year");
        break;
    case "September":
        console.log("This is the ninth month of the year");
        break;
    case "October":
        console.log("This is the tenth month of the year");
        break;
    case "November":
        console.log("This is the eleventh month of the year");
        break;
    case "December":
        console.log("This is the twelveth month of the year");
        break;
    default:
        console.log("Errroooor!!!!");
}

// console.log(message);
// very useful for more than two easy cases (condition for equality )
// we cannot use && or the ||
// we cannot use > or < or >= <= 

