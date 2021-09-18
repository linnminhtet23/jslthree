//UI
const background = document.getElementById("background");
const password = document.getElementById("password");
const eyeicon = document.getElementById('eye');

//Event Listener
password.addEventListener("input",(e)=>{
    const input= e.target.value;
    const inlength = input.length;

    // console.log(20 - inlength*2);

    const blurvalue = 20 - inlength*2;
    background.style.filter = `blur(${blurvalue}px)`
});

eyeicon.addEventListener("click",()=>{
    if(eyeicon.classList.contains("fa-eye")){
        eyeicon.classList.replace("fa-eye", "fa-eye-slash")
        password.setAttribute('type','text');
        
    }else{
        eyeicon.classList.replace("fa-eye-slash", "fa-eye");
        password.setAttribute('type','password');
    }
})