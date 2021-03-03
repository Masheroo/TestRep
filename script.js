"use strict";

const btns= document.querySelectorAll('.btnn'),
      del = function click() {
         console.log('click');
      };

const link = document.querySelector('a');

link.addEventListener('click', function(event){
   event.preventDefault();

   console.log(event.target);
});



btns.forEach(btn =>{
   btn.addEventListener('click', ()=>{
      console.log('click');
   }, {once: true});
});


