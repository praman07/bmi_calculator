// white key audios
let c = document.getElementById("c");
let d = document.getElementById("d");
let eSound = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let aSound = document.getElementById("a");
let b = document.getElementById("b");

// black key audios
let cs = document.getElementById("cs");
let ds = document.getElementById("ds");
let fs = document.getElementById("fs");
let gs = document.getElementById("gs");
let as = document.getElementById("as");

// white keys
let keyA = document.getElementById("keyA");
let keyS = document.getElementById("keyS");
let keyD = document.getElementById("keyD");
let keyF = document.getElementById("keyF");
let keyG = document.getElementById("keyG");
let keyH = document.getElementById("keyH");
let keyJ = document.getElementById("keyJ");

// black keys
let b1 = document.querySelector(".k1");
let b2 = document.querySelector(".k2");
let b3 = document.querySelector(".k3");
let b4 = document.querySelector(".k4");
let b5 = document.querySelector(".k5");

// KEYBOARD PLAY
document.addEventListener("keydown", function (e) {

  // white keys
  if (e.code === "KeyA") play(c, keyA);
  if (e.code === "KeyS") play(d, keyS);
  if (e.code === "KeyD") play(eSound, keyD);
  if (e.code === "KeyF") play(f, keyF);
  if (e.code === "KeyG") play(g, keyG);
  if (e.code === "KeyH") play(aSound, keyH);
  if (e.code === "KeyJ") play(b, keyJ);

  // black keys
  if (e.code === "KeyW") play(cs, b1);
  if (e.code === "KeyE") play(ds, b2);
  if (e.code === "KeyT") play(fs, b3);
  if (e.code === "KeyY") play(gs, b4);
  if (e.code === "KeyU") play(as, b5);
});

// MOUSE PLAY
keyA.addEventListener("click", () => play(c, keyA));
keyS.addEventListener("click", () => play(d, keyS));
keyD.addEventListener("click", () => play(eSound, keyD));
keyF.addEventListener("click", () => play(f, keyF));
keyG.addEventListener("click", () => play(g, keyG));
keyH.addEventListener("click", () => play(aSound, keyH));
keyJ.addEventListener("click", () => play(b, keyJ));

b1.addEventListener("click", () => play(cs, b1));
b2.addEventListener("click", () => play(ds, b2));
b3.addEventListener("click", () => play(fs, b3));
b4.addEventListener("click", () => play(gs, b4));
b5.addEventListener("click", () => play(as, b5));

// PLAY FUNCTION
function play(sound, key) {
  sound.currentTime = 0;
  sound.play();

  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 150);
}