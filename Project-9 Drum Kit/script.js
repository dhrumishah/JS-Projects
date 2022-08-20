let prevElement;
let prevAudio;

function playSound(e) {
  if (prevElement !== undefined) {
    prevElement.classList.remove("playing");
    prevAudio.pause();
  }
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  prevElement = key;
  prevAudio = audio;
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);
