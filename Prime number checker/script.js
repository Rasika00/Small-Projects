let prime= document.getElementById("prime");
const check= document.getElementById("check");
let verify= document.getElementById("verify");

check.addEventListener("click",()=>{
    let number =parseInt(prime.value);

    if(isNaN(number) || number<0 ){
        verify.textContent="Please enter a valid positive number!";
        verify.style.color="red";
        return;
    }
    if(isPrime(number)){
        verify.textContent=`${number} is a prime number.`
        verify.style.color="green"
    } else{
        verify.textContent=`${number} is not a prime number`
        verify.style.color="red"
    }
});

function isPrime(num){
    if (num<=1) return false;
    for (let i=2;i<=Math.sqrt(num);i++){
        if ( num%i===0) return false;
    }
    return true;
}

