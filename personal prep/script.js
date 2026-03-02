let a = document.querySelector("#yo");

a.addEventListener('dblclick' ,function(){
  a.classList.toggle("remaster");
})


let inp = document.querySelector("input:nth-child(2n)");

inp.style.backgroundColor = "Blue"; 