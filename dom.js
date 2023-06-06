// const allTitles = document.getElementsByTagName("h1");

// console.log(allTitles);
// console.log(allTitles.length);

// const titles = document.querySelectorAll("h1");
// for (let i = 0; i < titles.length;){
//     titles[3]
// console.log (titles[3].className);
// console.log (titles[3].id);
// }

// const cret = document.createElement("div")
// const cret1 = document.createElement("span")
//  const container = document.getElementById('container');
//  const pi = document.querySelector("p");
//  container.appendChild(cret)
//  cret.appendChild(cret1)
//  cret1.innerText = "February Cohort";
//  pi.classList.add("bold_text");

const dom1 = document.querySelector("p")
console.log(dom1)

const domOne = document.getElementById("one")
console.log(domOne)
const domTwo = document.getElementById("two")
console.log(domTwo)
const domThree = document.getElementById("three")
console.log(domThree)
const domFour = document.getElementById("four")
console.log(domFour)


const domall = document.querySelectorAll("p")
console.log(domall)


const text = document.querySelectorAll("p")
for(let i = 0; i < text;){
    console.log(text)
}   

const text4 = document.getElementById("four")
text4.textContent="Fourth paragragh";
console.log(text4.textContent)



const para = document.querySelector("p");
para.id ="first";
const textnode = document.createTextNode("Water");
para.appendChild(textnode)

const two = document.getElementById('two');
two.className = "second";

const three = document.getElementById("three");
three.id = "third";

const four = document.getElementsById("four");
four.className = "fourth"

const plus = document.querySelector("p");
plus.style.color="red";
plus.classList.add("text_p")

const add = document.getElementById("two");
add.classList.add("color_text");


let allPara = document.querySelectorAll("p");
for (let i=0; i < allPara.length; i++){
    allPara = allPara[i];
    if (i==0 || i==2){
        allPara.style.color="green";
        }else if (i==1 || i==2){
            allPara.style.color="red";
        }
    }     

// 3
let paragragh = document.querySelector("p");
paragragh.id='ok'
paragragh.innerHTML="wow"

let parag = document.getElementById("two");
parag.id='ok'
parag.innerHTML="wow"