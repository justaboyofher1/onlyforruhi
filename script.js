document.getElementById("password-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from reloading the page

  const correctPassword = "1710";
  const userPassword = document.getElementById("password").value;

  if (userPassword === correctPassword) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
});

// Music toggle
const music = document.getElementById("music");
const musicToggleBtn = document.getElementById("music-toggle");
let isPlaying = false;

musicToggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicToggleBtn.textContent = "⏸️ Pause Song";
    isPlaying = true;
  } else {
    music.pause();
    musicToggleBtn.textContent = "▶️ Play Song";
    isPlaying = false;
  }
});
