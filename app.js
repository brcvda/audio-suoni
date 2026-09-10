const player = document.getElementById("audioPlayer");
const title = document.getElementById("track-title");

function playTrack(url, nome) {
    title.textContent = nome;
    player.src = url;
    player.load();

    player.play().catch(error => {
        console.error("Errore riproduzione:", error);
    });
}
