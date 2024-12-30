const button=document.querySelector(".switch");
const body=document.body;

button.addEventListener("click",()=>{
    body.classList.toggle("on");
})
