//level 1
//1
let users = prompt ("Enter your age")
let remain = 18 -users
if (users >= 18) {
    console.log ("You are old enough to drive")
}else{
    console.log(`you are left with ${remain} to drive`)
}

//2
const yourAge = 25;
let myAge = prompt("enter")
let rest = 25 - myAge
let left = myAge -25 
if(myAge > 25) {
    console.log (`you are ${left} years older than me`)
}else{
    console.log(`i'm ${rest} years older`)
}

// 3
//if....else
let a = 4
let b = 3
if (a>b){
    console.log(`${a} is greater than ${b}`)
}
else{
    console.log(`${a} is less than ${b}`)
}

//ternary operator
let a1 = 2
let b1 = 3
a1 > b1 ?
console.log(`${a1} is greater than ${b1}`)
:console.log(`${a1} is less than ${b1}`)

//4
let numbers = 4
if(numbers % 2 == 0){
    console.log(`${numbers} is an even number`)
}else{
    console.log(`${numbers} is an odd number`);
}

//level 2
//1
let number = 49
if (number >= 80){
    console.log("A")
}else if(number >= 70){
    console.log("B")
}else if (number >= 60){
    console.log("C")
}else if (number >= 50){
    console.log("D")
}else
console.log("F")

//2
const season = "February"
if ( season === "September"|| season === "October"|| season === "November"){
    console.log("The Season is Autumn");
}
else if (season === "December"|| season === "January"|| season === "February"){
    console.log("The Season is Winter");
}
else if (season === "March"|| season === "April"|| season === "May"){
    console.log("The Season is Spring");
}
else if (season === "June"|| season === "July"|| season === "August"){
    console.log("The Season is Summer");
}
else console.log ("not a season")

//3
let week = prompt("What is the day today")
if (week == "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"){
    console.log(`${week} is a weekend.`)
}