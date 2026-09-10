const player = document.getElementById("audioPlayer");
const title = document.getElementById("track-title");

function playTrack(url, nome){

    player.src = url;

    title.textContent = nome;

    player.play();
}
