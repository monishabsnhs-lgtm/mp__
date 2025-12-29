const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

const songs = [
  { title: "Chuttamalle", artist: "Anirudh", src: "songs/song1.mp3", cover: "images/cover1.jpg" },
  { title: "Song Two", artist: "Artist", src: "songs/song2.mp3", cover: "images/cover2.jpg" }
];

let index = 0;
let isPlaying = false;

function loadSong(i) {
  audio.src = songs[i].src;
  document.getElementById("title").innerText = songs[i].title;
  document.getElementById("artist").innerText = songs[i].artist;
  document.getElementById("cover").src = songs[i].cover;
}

function playPause() {
  if (!isPlaying) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

loadSong(index);
