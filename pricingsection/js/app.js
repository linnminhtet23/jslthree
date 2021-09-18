//UI
const checkbox =document.getElementById('toggle'),
slider = document.getElementById('slider');

const basic = document.querySelector('.basic');
const prof = document.querySelector('.prof');
const master = document.querySelector('.master');

slider.addEventListener('click',()=>{
    // console.log('hey')
    if(!checkbox.checked){
        basic.innerText = 110;
        prof.innerText=230;
        master.innerText = 350
    }else{
        [basic.innerText, prof.innerText, master.innerText] = [9.99, 19.99, 29.99] 
    }
})