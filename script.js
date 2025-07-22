function toggleSong() {
  const song = document.getElementById("bgMusic");
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}

function showVideo() {
  confettiRain();
  const videoContainer = document.getElementById("videoContainer");
  const video = document.getElementById("ruhiVideo");
  videoContainer.classList.remove("hidden");
  video.currentTime = 0;
  video.play();
}

function hideVideo() {
  const videoContainer = document.getElementById("videoContainer");
  const video = document.getElementById("ruhiVideo");
  video.pause();
  video.currentTime = 0;
  videoContainer.classList.add("hidden");
}

function confettiRain() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

function checkCode() {
  const input = document.getElementById("unlockCode").value;
  if (input === "1710") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    alert("Wrong code! Try the date we met again 🥲");
  }
}
