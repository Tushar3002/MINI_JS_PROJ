const password=document.getElementById("password")
const strength=document.getElementById("strength")
const message=document.getElementById("message")
const submit=document.querySelector("button")

password.addEventListener("input",()=>{
    const passwordValue=password.value
    const passwordLength=passwordValue.length;

    let strengthValue=''
    if(passwordLength == 0){
        strengthValue=''
    }else if(passwordLength <4){
        strengthValue='weak'
    }else if(passwordLength <8){
        strengthValue='medium'
    }else{
        strengthValue='strong'
    }

    strength.textContent=strengthValue
    message.style.display='block'
})

submit.addEventListener("click",()=>{
    const passwordType=password.getAttribute('type')

    if(passwordType==='password'){
        password.setAttribute('type','text')
    }else{
        password.setAttribute('type','password')
    }
})