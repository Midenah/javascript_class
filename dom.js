// const allTitles = document.getElementsByTagName("h1");

// console.log(allTitles);
// console.log(allTitles.length);

// const titles = document.querySelectorAll("h1");
// for (let i = 0; i < titles.length;){
//     titles[3]
// console.log (titles[3].className);
// console.log (titles[3].id);
// }

const cret = document.createElement("div")
const cret1 = document.createElement("span")
 const container = document.getElementById('container');
 const pi = document.querySelector("p");
 container.appendChild(cret)
 cret.appendChild(cret1)
 cret1.innerText = "February Cohort";
 pi.classList.add("bold_text");

 
// let user = prompt('Enter');
// user = parseInt() 
// switch(user){
//     case user = 18:
//     console.log("you can drive");
//     break;
//     case user > 18:
//     console.log("oga go sit down");
//     break;
//     default:
//         console.log("you cant drive");
// }