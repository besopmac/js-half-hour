let newItemCounter = 1;
let ourButton = document.getElementById('add-button');
let ourHeadline = document.getElementById('our-headline');

let ourList = document.querySelector('#our-list');
let listItems = document.querySelectorAll('#our-list li');

// Add a listener in each list item
ourList.addEventListener('click', activateItem);

// Function to change the headline <h1> content by the list item content
function activateItem(e) {
    if (e.target.nodeName == "LI") {
        ourHeadline.innerHTML = e.target.innerText;

        // Remove a class from all list items...
        for (let i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove('is-active');
        }

        // ...then add the active class only into clicked item
        e.target.classList.add('is-active');
    }
}

// Add a function on button to create a new list item
ourButton.addEventListener('click', createNewItem);

function createNewItem() {
    ourList.innerHTML += `
        <li class='list-item'>
            New item ${newItemCounter}
        </li>`;
    newItemCounter++;
}
