
let head=document.querySelector('h1');
head.setAttribute('id',"head");
let pcolor=document.querySelectorAll('p');
pcolor.forEach(p=>{
    p.setAttribute('id',"pcolor");
})

let div=document.querySelector('div');
console.log(div.children);
let children=Array.from(div.children);
children.forEach(child=>{
    console.log(child);
});
console.log(children[0].parentElement);

const sibling =children[1].nextElementSibling;
console.log(sibling.textContent);