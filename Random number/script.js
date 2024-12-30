const button=document.getElementById("button");
const random=document.getElementById("random");

button.addEventListener("click",()=>{
    const randomNumnber=Math.floor(Math.random()*100);
    random.textContent=randomNumnber;

});