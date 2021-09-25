const panel = document.getElementById('panel');
const ratingcontainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const sendbtn = document.querySelector('#send');

let selectedrating = 'Satisfied'

ratingcontainer.addEventListener('click',(e)=>{

    // console.log('hay') 
    // if(e.target.classList.contains('rating')){{}
    //     console.log(e.target);
    // }

    if(e.target.parentNode.classList.contains('rating')){
        // console.log(e.target);

        removeactive();
        e.target.parentNode.classList.add('active');

        // selectedrating = e.target.nextElementSibling.textContent;
        selectedrating = e.target.parentNode.lastElementChild.textContent;
        // console.log(selectedrating);
    }else if(e.target.classList.contains('rating')){
        removeactive();
        e.target.classList.add('active');
        selectedrating  =e.target.lastElementChild.textContent;
    }
});

function removeactive(){
    for(let i=0; i< ratings.length; i++){
        ratings[i].classList.remove('active');
    }
}

sendbtn.addEventListener('click',()=>{
    // console.log('click')
    // console.log(e.target)
    panel.innerHTML=`
    <i class="fas fa-heart"> </i>
    <strong>Thank You</strong>
    <strong>Feed back: ${selectedrating}</strong>
    <p>We'll use your feeback to improve our customer support</p>
    `;
})