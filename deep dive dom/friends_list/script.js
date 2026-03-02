let btns = document.querySelectorAll("button");
let h2s = document.querySelectorAll("h2");
btns.forEach(function(btn, index){
  btn.addEventListener("click", function(){
    if (h2s[index].textContent === "Friends") {
      h2s[index].textContent = "Stranger";
      
    } else {
      h2s[index].textContent = "Friends";
    }
  });
});

btns.forEach(function (btn) {

  btn.addEventListener("mousemove", function (e) {
    if (btn.textContent !== "Remove Friend") return;

    const x = e.offsetX;
    const y = e.offsetY;

    btn.style.background = `radial-gradient(
      circle at ${x}px ${y}px,
      rgb(194, 100, 116),
      purple,
      red,
      orange
    )`;
  });

  btn.addEventListener("mouseleave", function () {
    if (btn.textContent === "Remove Friend") {
      btn.style.background = "";
    }
  });

  btn.addEventListener("click", function () {
    if (btn.textContent === "Remove Friend") {
      btn.textContent = "Add Friend";
      btn.style.background = "";  
    } else {
      btn.textContent = "Remove Friend";
      btn.style.background = "red";
    }
  });
});

