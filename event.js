const actionBtn = document.getElementById("actionBtn")
const para = document.getElementById("para")
const btn = document.getElementsByTagName("button")

actionBtn.addEventListener("click", (event) => {
    event.preventDefault();
    para.classList.add ("change_text");
    para.style.background ="blue";
    para.style.color ="white";
})