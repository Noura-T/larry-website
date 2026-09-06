const songs = document.querySelectorAll(".song");

const nowPlaying = document.getElementById("nowPlaying");
const nowPlayingText = nowPlaying.querySelector("p");

let spotifyController = null;


/* Spotify API */

window.onSpotifyIframeApiReady = (IFrameAPI) => {

    const element = document.getElementById("spotify-embed");

    const options = {
        width: "100%",
        height: 152,
        uri: "spotify:track:2Jg4ndG629t0z3Ah7yej3G"
    };

    IFrameAPI.createController(element, options, (EmbedController) => {

        spotifyController = EmbedController;

        console.log("Spotify player is ready!");

    });

};


/* Songs */

songs.forEach(song => {

    song.addEventListener("click", () => {

        songs.forEach(item => {
            item.classList.remove("selected");
        });

        song.classList.add("selected");


        const title = song.querySelector("h2").textContent;
        const artist = song.querySelector("p").textContent;

        nowPlayingText.textContent = `${title} — ${artist}`;
        nowPlaying.classList.add("active");


        /* Get Spotify track ID */

        const spotifyURL = song.getAttribute("data-spotify");

        const trackID = spotifyURL.split("/track/")[1].split("?")[0];

        const spotifyURI = `spotify:track:${trackID}`;


        console.log("Selected:", title);
        console.log("Spotify URI:", spotifyURI);


        /* Change the Spotify player */

        if (spotifyController) {

            spotifyController.loadUri(spotifyURI);

        } else {

            console.log("Spotify controller is not ready yet.");

        }

    });

});


/* Next Button */

const nextButton = document.querySelector(".next-button");

if (nextButton) {

    nextButton.addEventListener("click", (event) => {

        event.preventDefault();

        const nextPage = nextButton.href;

        document.body.classList.add("page-leaving");

        setTimeout(() => {
            window.location.href = nextPage;
        }, 600);

    });

}