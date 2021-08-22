//UI
const form = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul= document.getElementById('todos');

const todos =  JSON.parse(localStorage.getItem('todos'));
// console.log(todos);
// console.log(typeof todos);

if(todos){
    todos.forEach((todo)=>{
        // console.log(todo.text);
        addtodo(todo);
    })
}

//Event Listener
form.addEventListener('submit',(e)=>{

    addtodo();
    e.preventDefault();
    
});
// inputel.addEventListener('enter',);

function addtodo(todo){
    let todotext = inputel.value;

    if(todo){

        todotext =  todo.text;
    
    }
    if(todotext){

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);
        inputel.vlaue='';

        //add to local storage
        updatelocalstorage();

        //add line through
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
            updatelocalstorage();
        });

        li.addEventListener('contextmenu',(e)=>{
            li.remove();
            updatelocalstorage();
            e.preventDefault();
        } );
    }else{
        window.alert('Enter your todo')
    }

}


//update local storage
function updatelocalstorage(){
    // console.log('storage is ready');
    let todolis =  document.querySelectorAll('li');

    let todos=[];

    todolis.forEach(todoli=>{
        // console.log(todoli)
        // console.log(todoli.innerText)

        todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        });
    });
    localStorage.setItem('todos',JSON.stringify(todos));
    // console.log(todos);
}