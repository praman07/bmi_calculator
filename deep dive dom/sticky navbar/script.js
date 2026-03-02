let nav = document.querySelector('nav');
document.addEventListener('wheel',function(det){
    if (det.deltaY>0){
        nav.style.transform = "translateY(-100%)";
        
    }
    else{
        nav.style.transition = "all ease 1s" ;  
        nav.style.transform = "translateY(0)";
    }
})

