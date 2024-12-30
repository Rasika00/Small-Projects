const icon=document.getElementById("eyeicon");
let password=document.getElementById("password");

icon.addEventListener("click",()=>{
     if(password.type==="password"){
        password.type="text";
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye");
        return;

     }else{
        password.type="password";
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash");
     }
   
})
const form = document.getElementById("submit");

form.addEventListener("click", () => {
    if(password.value === ""){
        alert("Password is required");
    } else {
        alert("Password is Submit");
    }
});

