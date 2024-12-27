// JavaScript Document
const playButtons = document.querySelectorAll('.play-button');
const audioPlayer = document.getElementById('audio-player');

playButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const audioSrc = this.dataset.audio;
        audioPlayer.src = audioSrc;
        audioPlayer.play();
    });
});