let follower = document.querySelector('.follower');
    document.addEventListener("mousemove",function(ele){
        follower.style.left = ele.clientX +"px";
        follower.style.top = ele.clientY +"px";
})
