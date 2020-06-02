const mySection1 = document.getElementById("container");

const mySection2 = document.querySelector("#container");

const secondClass = mySection1.getElementsByClassName("second");

const thirdClassWOL = mySection1.getElementsByClassName("third")[1];


const newP = document.createElement('p');
newP.innerText = 'Hello!';
mySection1.appendChild(newP);

// const addClass = document.getElementsByClassName("footer");
// addClass.className = "main";

const divs = document.getElementsByTagName('div');
divs[1].classList.add('main');
divs[1].classList.remove('main');

const newLi = document.createElement('li');
newLi.innerHTML = "four";
const ul = mySection1.children[0];
ul.appendChild(newLi);

let ol = mySection1.children[1];
let ol_children = ol.firstElementChild
//ol.style.backgroundColor = "green";

for(let i = 0; i < ol.childElementCount; i++){
    ol_children.style.backgroundColor = 'green';
    ol_children = ol_children.nextElementSibling
}

// while(ol.nextElementSibling != null){
//     ol.style.backgroundColor = 'green';
//     ol = ol.nextElementSibling
//     //ol_li.style.backgroundColor = "green";
//     //ol_li = ol_li.nextSibling;
// }

divs[1].parentElement.removeChild(divs[1]);

