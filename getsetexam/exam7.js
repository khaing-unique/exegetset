let head=document.querySelector('h1');
let paras=document.querySelectorAll('p');
paras.forEach(p=>{
    p.setAttribute('id',"pcolor");
});

let get=paras[1].getAttribute('id');
console.log(get);
head.setAttribute('id',"head");
