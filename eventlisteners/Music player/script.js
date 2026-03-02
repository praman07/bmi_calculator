
const song1 = document.querySelector("#song1");
const song2 = document.querySelector("#song2");
const song3 = document.querySelector("#song3");

const songs = [song1, song2, song3];

let index = 0;
let currentSong = songs[index];
let isPlaying = false;

const playPauseBtn = document.querySelector("#playPause");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progress = document.querySelector("#progress");
const songEls = document.querySelectorAll(".song");

function loadSong(i){
  songs.forEach(song => {
    song.pause();
    song.currentTime = 0;
  });

  index = i;
  currentSong = songs[index];

  songEls.forEach(song => song.classList.remove("active"));
  songEls[index].classList.add("active");

  currentSong.play();
  isPlaying = true;
  playPauseBtn.innerText = "⏸";
}

playPauseBtn.addEventListener("click", () => {
  if(isPlaying){
    currentSong.pause();
    playPauseBtn.innerText = "▶";
  }else{
    currentSong.play();
    playPauseBtn.innerText = "⏸";
  }
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
});

currentSong.addEventListener("timeupdate", () => {
  progress.value = (currentSong.currentTime / currentSong.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  currentSong.currentTime = (progress.value * currentSong.duration) / 100;
});

songEls.forEach(song => {
  song.addEventListener("click", () => {
    loadSong(Number(song.dataset.index));
  });
});

songs.forEach(song => {
  song.addEventListener("ended", () => {
    playPauseBtn.innerText = "▶";
    isPlaying = false;
  });
});