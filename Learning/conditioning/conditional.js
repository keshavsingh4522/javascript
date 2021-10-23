//--------------if else-------------

// let's see an example implementation
const x = 10;
// we find out with the comparison operator
// is the value of the variable x less than 11
if (x < 11) {
    // if fulfilled
    console.log("TRUE, variable x is less than 11");
} else {
    // if not fulfilled
    console.log("FALSE, variable x is greater than 11");
}

//--------------else if-------------

// let's see an example implementation
const clock = 13;
// we check the value of the clock variable
// is the clock variable less than 12 ?
if (clock < 12) {
    // if fulfilled
    console.log("good morning");
    //if not met then proceed to else if . block
    //that is, is the clock variable greater than or equal to 12
} else if (clock >= 12) {
    // if fulfilled
    console.log("good afternoon");
} else {
    // if none of the conditions are met from the two blocks above, then the else block will be executed
    console.log("FALSE, variable x is greater than 10");
}

//------------switch case------------

// let's see an example implementation
const fruit = "Oranges";

// first, we determine what variables we will check
switch (fruit) {
    // let's check, does the fruit variable contain apples?
    case "Apple":
        console.log("An apple costs 2 dollars");
        break;
        // if not then move on to the next case
        // does fruit variable contain Pineapple?
    case "Pineapple":
        console.log("An pineapple costs 5 dollars");
        break;
        // if still not, it will pick up from default
    default:
        console.log("Oranges are gone");
        break;
}