const btn = document.getElementById("music-btn");
const music = document.getElementById("ruhiMusic");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "⏸️ Pause Song";
    isPlaying = true;
  } else {
    music.pause();
    btn.textContent = "▶️ Play Song";
    isPlaying = false;
  }
});
