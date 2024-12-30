const passwordbox=document.getElementById("password");
const button=document.getElementById("button");
const copy=document.getElementById("copy");
const generatepassword=()=>{
    const chars="djkhdkhfskdjfhdksjhf8480575486759894!@*&*&^&*@^$*#&*@*(%*$_??><::|>?hidsfgy6746"
    let password="";
    for(let i=0; i<10;i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length))
    }
    passwordbox.value=password;
}
button.addEventListener("click",generatepassword)

copy.addEventListener("click",()=>{
    const passwordcopy=passwordbox.value.trim();
    if(!passwordcopy){
        alert("No password to copy")
        return;
    }
    navigator.clipboard.writeText(passwordcopy)
    .then(()=>{
        alert("passwword copied")
    })
})