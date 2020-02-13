
let paras=document.querySelectorAll('p');
let htwo=document.querySelectorAll('h2');
htwo.forEach(p=>{
   if( p.textContent.includes("Welcome to my program!")){
    p.classList.add("warn");
    
   }else if(p.textContent.includes("Hello,how are you?")){
       p.classList.add("primary");
       
   }
})
console.log(htwo);