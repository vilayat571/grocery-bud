let form = document.querySelector('h1').nextElementSibling;
let input = document.querySelector('input');
let list = document.querySelector('.list');
let add = document.getElementById('add');

let trash=`<i id='#trash' class="fa fa-trash" aria-hidden="true"></i>`;

form.addEventListener('submit',(e) => {

    e.preventDefault();

    let div = document.createElement('span');
    div.setAttribute('class','ikon');
    div.innerHTML=trash;

    let p = document.createElement('p');
    p.setAttribute('title','list item');
    p.classList.add('item');


    p.innerText = input.value;
    p.appendChild(div)

    list.appendChild(p);
    input.value = '';

});



var remove = document.querySelector('.ikon').firstElementChild

remove && remove.addEventListener('click',()=>{
    alert('trash')
})

console.log(removeEventListener);


// son derse bax yeniden yaz