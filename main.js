let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
// display data on web
let data = ['Module 1 goes live', 'Call on meet', 'Module 2 is working', 'Reschedule call on meet'];
data.map((value) => {
    let li = document.createElement('li');
    li.innerText = value;
    ul.appendChild(li);
})
//add data on button click

button.addEventListener("click", ()=>
{
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value="";
   
})
