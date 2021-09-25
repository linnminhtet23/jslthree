//UI
const picdiv = document.querySelector('.fill');
const empties= document.querySelectorAll('.empty');

// console.log(empties);

picdiv.addEventListener('dragstart', dragstart);
picdiv.addEventListener('dragend', dragend);

//DRAG START
function dragstart(){
    console.log('drag start is working');

    // this.classList.add('hold')
    this.className += ' hold';
}

//DRAG END
function dragend(){
    console.log('drag end is working');
    this.className ='fill'
}