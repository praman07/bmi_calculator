let paras = document.querySelectorAll(".doc p");
let doc = document.querySelector(".doc");
let info = document.querySelector(".cursor");

let fontSize = 18;
window.addEventListener("wheel", e => {
  fontSize += e.deltaY < 0 ? 1 : -1;
  fontSize = Math.max(12, fontSize);

  doc.childNodes.forEach(n => {
    if(n.nodeType === 1){
      n.style.fontSize = fontSize + "px";
    }
  });
});

document.addEventListener("mousemove", e => {
  let words = 0;

  paras.forEach(p => {
    words += p.innerText.split(" ").length;
  });
  info.style.left = e.clientX + 15 + "px";
  info.style.top = e.clientY + 15 + "px";
});