//level 1
//data type 
const firstNames = "olamide";
const lastNames ="oluyomi";
const country = "nigeria";
const city ="lagos";
const age = 25;
const isMarried = false;
const yearly = 2023;

console.log(typeof firstNames, typeof lastNames, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

//2
const tye = '10'=== 10;
console.log(tye)

//3
let par =('9.8') === 10;
console.log(par)

//4i
let a = 5 >= 5;
let b = 0 == false;
let c = 29 <= 30;
console.log(a,b,c);

//4ii
let d = 1 <= false;
let e = 50 === "50"
let f = undefined == NaN
console.log(d,e,f);

//5
4 > 3 //true
4 >= 3 // true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4  //true
4 != 4 // false
4 !== 4 //false
4 != '4' // true
4 == '4' // true
4 === '4' // false

const g = 4 > 3
const h = 4 >= 3
const i = 4 < 3
const j = 4 <= 3
const k = 4 == 4
const l= 4 === 4
const m = 4 != 4
const n = 4 !== 4
const o = 4 != '4'
const p = 4 == '4'
const q = 4 === '4'
console.log(g,h,i,j,k,l,m,n,o,p,q);

//6
let now = new Date();
console.log(now.getFullYear(), now.getMonth(), now.getDay(), now.getHours(), now.getMinutes(), now.getMilliseconds());

//level 2 
//1
let base = prompt ('ENTER BASE')
let height = prompt ('ENTER HEIGHT')
base = parseFloat (base)
height = parseFloat (height)
const triangle = 0.5 *(base * height)
console.log("The area of the triangle is =" + triangle);

//2
let sideA = prompt ( "enter A")
let sideB = prompt ( "enter B")
let sideC = prompt ( "enter c")
sideA = parseFloat(sideA);
sideB = parseFloat(sideB);
sideC = parseFloat(sideC);
const peri = sideA + sideB + sideC;
console.log("The perimeter of the triangle is =",  peri);

//3
let lengthy = prompt("Enter the length of the rectangle ");
let width = prompt("Enter the width of the rectangle ");
lengthy = parseFloat(lengthy);
width = parseFloat(width);
let area = lengthy * width;
let perimeter = 2 * (lengthy + width);
console.log("Area of the rectangle: " + area);
console.log("Perimeter of the rectangle: " + perimeter);

// 4 
let radius = Number(prompt("Enter radius"));
const pi = 3.14;
let areaOfCircle = pi * radius * radius;
let circumference = 2 * (pi * radius);
console.log(
  `The area of the circle is ${areaOfCircle}, and the circumference is ${circumference}`
);

//5 
let slope = 2;
let yInter = -2;
let xInter = -yInter / slope
console.log(xInter)
console.log(yInter)
console.log(slope)


//6
let x1 = 2
let y1 = 2
let x2 = 6
let y2 = 10
let mSlope = (y2 - y1) / (x2 - x1)
console.log (mSlope)

//7
let qu1 = 2
let qu2 = 2
let endSlope = qu1 / qu2
console.log (endSlope)

//8
const xValue = parseFloat(prompt("Enter the x value to calculate y:"));
const yValue = Math.pow(xValue, 2) + 6 * xValue + 9;
console.log("y = " + yValue);
// 8
let hourWorked = parseInt(prompt("Enter hours worked"));
let ratesPerHr = parseInt(prompt("Enter rate per hours worked"));
let pay = hourWorked * ratesPerHr;
console.log(`Hours worked is ${hourWorked} and the rates is ${ratesPerHr} therefore accumulated pay is ${pay}`);

//9
const hour = prompt ("Hours")
const rate = prompt ('Rate')
const payment = hour * rate
console.log ("Your weekly earning is", pay)

//10
 let words = "Justinah";
 let length = words.length;
 const message = length >= 8 ? "your name is long":"your name is short"
 console.log(message);

//11
let firstName = "Justinah"
let lastName = "Oluyomi"
let firstNameLength = firstName.length
let lastNameLength = lastName.length
let result = firstNameLength - lastNameLength
console.log(result)

//1

let myAge = 250
let yourAge = 25
let remainAge = myAge - yourAge
console.log (`I am ${remainAge} older than you`)

//2
let enter = prompt("Birth Year") ;
let userAge = new Date().getFullYear()-enter;
let soon = 18 - userAge;
userAge >= 18 ?
console.log (`you are ${userAge} you are old enough to drive`)
: console.log(`You are ${userAge} you will be allowed to in ${soon} years`)

//3
let evnt = prompt ("Enter years you live")
let yearsLived = 365.25 * 24 * 60 * 60 * evnt
console.log(yearsLived)

//4
const time = new Date()
const year = time.getFullYear();
const month = time.getMonth() + 1;
const day = time.getDay() + 1;
const hours = time.getHours();
const minutes = time.getMinutes();
console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
console.log(`${day}-${month}-${year} ${hours}:${minutes}`)
console.log(`${day}/${month}/${year} ${hours}:${minutes}`)