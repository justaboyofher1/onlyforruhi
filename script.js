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
function unlock() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "2911"; // Change this if your date changes
  const errorMsg = document.getElementById("errorMsg");

  if (input === correctPassword) {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    errorMsg.style.display = "block";
  }
}
