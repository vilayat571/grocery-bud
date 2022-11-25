let form = document.querySelector('h1').nextElementSibling;
let input = document.querySelector('input');
let list = document.querySelector('.list');
let add = document.getElementById('add');

form.addEventListener('submit',(e) => {

    e.preventDefault();

    // create trash element
    let trash = document.createElement('i');
    trash.setAttribute('aria-hidden','true');
    trash.setAttribute('class','fa fa-trash');
    trash.setAttribute('id','trash');

    // create edit element
    let edit = document.createElement('i');
    edit.setAttribute('aria-hidden','true');
    edit.setAttribute('class','fas fa-edit');
    edit.setAttribute('id','edit');

    // create parent node
    let div = document.createElement('span');
    div.setAttribute('class','ikon');
    div.appendChild(trash)
    div.appendChild(edit)

    // append elements
    let p = document.createElement('p');
    p.setAttribute('title','list item');
    p.classList.add('item');


    p.innerText = input.value;
    p.appendChild(div)

    list.appendChild(p);
    input.value = '';

    // remove item
    var remove = document.querySelector('#trash');
    remove.addEventListener('click',() => {

        var question = confirm('are you sure');

        if (question) {
            remove.parentElement.parentElement.remove();
        }

        else {
            return false
        }

    });

    // edit item
    var redraft = document.querySelector('#edit');
    redraft.addEventListener('click',() => {

        input.value = redraft.parentElement.parentElement.textContent;

    });

    // copy-edit element
    add.addEventListener('click',() => {

        var question = confirm('are you sure');

        if (question) {
            remove.parentElement.parentElement.remove();
        }

        else {
            return false
        }

    });

});
