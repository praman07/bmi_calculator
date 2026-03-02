let menu = document.querySelector(".menu");
let output = document.querySelector("#output");

menu.childNodes.forEach(node => {
  if(node.nodeType === 1){

    node.onclick = () => {

      menu.childNodes.forEach(n => {
        if(n.nodeType === 1){
          n.style.background = "#222";
        }
      });

      node.style.background = "orange";
      node.style.color = "black";

      output.innerHTML = "Selected: <b>" + node.innerHTML + "</b>";
    };

  }
});