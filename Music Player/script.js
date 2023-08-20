const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const forwardButton = document.getElementById('forward-btn');

playButton.addEventListener('click', () => {
  audioPlayer.play();
  playButton.disabled = true;
  pauseButton.disabled = false;
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
  playButton.disabled = false;
  pauseButton.disabled = true;
});

forwardButton.addEventListener('click', () => {
  audioPlayer.currentTime += 10; // Forward by 10 seconds
});

audioPlayer.addEventListener('ended', () => {
  playButton.disabled = false;
  pauseButton.disabled = true;
});
